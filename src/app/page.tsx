'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useContext, useState } from 'react'
import { ThemeContext } from '@/components/ThemeManager/ThemeContext'
import RootLayout from './layout'
import { ThemeManager } from '@/components/ThemeManager/ThemeManager'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { theme } = useContext(ThemeContext);
  console.log('theme for home', theme);

  return (
    <RootLayout>
      <div className={styles.background}>
        <video autoPlay loop height="100%" width="100%" src={theme.background}>
        </video>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles["cute-stars"]}></div>
      <ThemeManager />
    </RootLayout>
  )
}
