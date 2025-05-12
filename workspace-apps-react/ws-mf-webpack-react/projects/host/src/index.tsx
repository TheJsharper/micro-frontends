import ReactDom from 'react-dom/client';
import React, { ReactNode, useState, createContext } from 'react';
import { App } from './App';
// Define the shape of the context data
export interface AppContextType {
  user: string | null;
  setUser: (user: string | null) => void;
}

// Create the context with a default value
export const AppContext = createContext<AppContextType | undefined >(undefined);

// Create a provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>);    