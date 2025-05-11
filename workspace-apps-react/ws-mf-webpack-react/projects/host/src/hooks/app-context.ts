import { AppContextType } from "host/App";
import { createContext } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);