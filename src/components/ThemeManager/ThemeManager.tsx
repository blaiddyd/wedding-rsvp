"use client"

import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeOption, Themes } from "./themes";
import styles from './theme-manager.module.css';

export const ThemeManager = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const setThemeCallback = () => {
        console.log('chaging theme!!');
        const themeId = theme.name as ThemeOption;
        switch(themeId) {
            case 'age-of-stars':
                setTheme(Themes[1]);
                return;
            case 'limgrave':
            default:
                setTheme(Themes[0]);
                return; 
        }
    }

    return (
        <div className={styles.headline}>
            <span className={styles["headline-border"]}>
            ╔═══*.·:·.✧    ✦    ✧.·:·.*═══╗
            </span>
            <h1 id="main-title">Ekin & Oskar start the Age of Stars!</h1>
            <button id={styles["theme-button"]} onClick={() => setThemeCallback()}>
                <span>Change Theme</span>
            </button>
            <span className={styles["headline-border"]}>
            ╚═══*.·:·.✧    ✦    ✧.·:·.*═══╝
            </span>
        </div>
    );
}