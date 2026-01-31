"use client";

import { createContext } from "react";

interface AppContextType {
  user: string;
  setUser: (value: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
