"use client";

import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Especialidade } from "../app/lib/type";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [filtroEspecialidade, setFiltroEspecialidade] = 
    useState<Especialidade>("All");
  return (
    <AppContext.Provider
      value={{
        filtroEspecialidade,
        setFiltroEspecialidade,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppContext.Provider>
  );
}
