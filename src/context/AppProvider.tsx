"use client";

import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Especialidade, FilterPreventivas } from "../app/lib/type";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [filtroEspecialidade, setFiltroEspecialidade] =
    useState<Especialidade>("All");

  const [filterPreventivas, setFilterPreventivas] =
    useState<FilterPreventivas>("All");
  return (
    <AppContext.Provider
      value={{
        filtroEspecialidade,
        setFiltroEspecialidade,
        filterPreventivas,
        setFilterPreventivas,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppContext.Provider>
  );
}
