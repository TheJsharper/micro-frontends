import { ReactNode } from "react";

export interface AppContextType {
    user: string | null;
    setUser: (user: string | null) => void;
  }
  export interface AppProviderProps {
    children: ReactNode;
  }
  