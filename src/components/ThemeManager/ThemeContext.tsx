"use client"

import React, { createContext, Dispatch, ReactNode, useState } from "react";
import { Theme, ThemeOption, Themes } from "./themes";

interface Props {
    children?: ReactNode;
}

interface ContextValue {
    theme: Theme,
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ContextValue>({
    theme: Themes[0],
    setTheme: () => {}
});

export const ThemeContextProvider = ({ children }: Props ) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(Themes[0]);
    console.log('=== current theme', currentTheme);
    const [contextState, setContextState] = useState<ContextValue>({
        theme: currentTheme,
        setTheme: (theme: Theme) => setContextState({
            ...contextState,
            theme
        })
    });
  
    return (
        <ThemeContext.Provider value={{
            theme: currentTheme,
            setTheme: setCurrentTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}