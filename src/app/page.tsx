'use client'
import styles from './page.module.css'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/components/ThemeManager/ThemeContext'
import RootLayout from './layout'
import { ThemeManager } from '@/components/ThemeManager/ThemeManager'
import { MainContent } from '@/components/ContentArea/MainContent'

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <RootLayout>
      <div className={styles.background}>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <Image src={theme.background}  
            fill
            alt='Maiden achieved'
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles["cute-stars"]}></div>
      <ThemeManager />
      <MainContent />
    </RootLayout>
  )
}
