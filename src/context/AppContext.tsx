"use client";

import { createContext } from "react";
import { Especialidade, FilterPreventivas } from "../app/lib/type";

interface AppContextType {
  filtroEspecialidade: Especialidade;
  setFiltroEspecialidade: React.Dispatch<React.SetStateAction<Especialidade>>;
  filterPreventivas: FilterPreventivas;
  setFilterPreventivas: React.Dispatch<React.SetStateAction<FilterPreventivas>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
