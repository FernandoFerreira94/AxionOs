"use client";

import { createContext } from "react";
import { Especialidade } from "../app/lib/type";

interface AppContextType {
  filtroEspecialidade: Especialidade;
  setFiltroEspecialidade: React.Dispatch<React.SetStateAction<Especialidade>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
