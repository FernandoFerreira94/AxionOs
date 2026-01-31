"use client";

import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [user, setUser] = useState<string>("");
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppContext.Provider>
  );
}
