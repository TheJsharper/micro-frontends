
import { AppContextType } from "../contexts/models";
import { useContext } from "react";
import { AppContext } from "./app-context";

/**/const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
  };
export default useAppContext;