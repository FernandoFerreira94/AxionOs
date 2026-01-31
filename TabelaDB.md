// --- AXIO OS - Arquitetura de Banco de Dados ---
// PO: Reestruturação para alta performance e auditoria

Enum tipo_manutencao {
melhoria
corretiva
acompanhamento_terceiros
preventiva
}

Enum categorias {
eletrica
refrigeracao
civil
}

Enum status_os {
aberto
em_execucao
aguardando_material
aguardando_fiscalizacao
finalizado
}

Enum materiais_departamento {
shopping_colinas
green_tower
empreededor
}

Table users {
id uuid [pk]
nome_completo varchar
matricula varchar [unique, note: 'Login do usuário']
password_hash varchar [note: '6 primeiros dígitos do CPF']
funcao varchar
is_adm boolean [default: false]
created_at timestamp
}

Table equipamentos {
id uuid [pk]
tag varchar [unique, note: 'Ex: CHILLER-01']
nome varchar
categoria categorias
modelo varchar
fabricante varchar
local_instalacao varchar
descricao text
}

Table ordens_servico {
id uuid [pk]
numero_os varchar [unique, note: 'Gerado: SHOP-EL-1001']
tipo tipo_manutencao
complexo varchar [note: 'Shopping ou Torre']
categoria categorias
status status_os
prioridade varchar [note: 'Baixa, Média, Alta']
local_atividade varchar
empresa_terceira varchar [null]
responsavel_id uuid [ref: > users.id]
data_abertura timestamp [default: `now()`]
data_finalizacao timestamp
}

Table os_atividades {
id uuid [pk]
os_id uuid [ref: > ordens_servico.id]
tecnico_id uuid [ref: > users.id]
descricao text
data_registro timestamp [default: `now()`]
}

Table os_apoio {
id uuid [pk]
os_id uuid [ref: > ordens_servico.id]
user_id uuid [ref: > users.id]
}

Table os_anexos {
id uuid [pk]
os_id uuid [ref: > ordens_servico.id]
user_id uuid [ref: > users.id]
url_foto text
tipo_evidencia varchar [note: 'Antes, Durante, Depois']
created_at timestamp
}

Table materiais_categoria {
id uuid [pk]
nome varchar
}

Table materiais {
id uuid [pk]
nome varchar
categoria uuid [ref: > materiais_categoria.id]
departamento materiais_departamento
quantidade_estoque int
unidade varchar [note: 'Un, Mt, Kg']
}

Table os_materiais {
id uuid [pk]
os_id uuid [ref: > ordens_servico.id]
material_id uuid [ref: > materiais.id]
quantidade_usada int
status_baixa boolean [default: false, note: 'Pendente ou Baixado pelo Almoxarife']
}

Table planos_preventivos {
id uuid [pk]
equipamento_id uuid [ref: > equipamentos.id]
data_programada date
tecnico_id uuid [ref: > users.id]
status status_os
checklist_json jsonb [note: 'Perguntas dinâmicas do checklist']
}
