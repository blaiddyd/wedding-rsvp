"use client"

import React, { useContext, useState } from "react";
import styles from './theme-manager.module.css';

export const ThemeManager = () => {
    return (
        <div className={styles.headline}>
            <span className={styles["headline-border"]}>
            ╔═══*.·:·.✧    ✦    ✧.·:·.*═══╗
            </span>
            <h1 id="main-title">Join Ekin & Oskar in the Age of Stars!</h1>
            <span className={styles["headline-border"]}>
            ╚═══*.·:·.✧    ✦    ✧.·:·.*═══╝
            </span>
        </div>
    );
}