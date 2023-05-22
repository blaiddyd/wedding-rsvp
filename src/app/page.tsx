'use client'
import styles from './page.module.css'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/components/ThemeManager/ThemeContext'
import RootLayout from './layout'
import { ThemeManager } from '@/components/ThemeManager/ThemeManager'
import { MainContent } from '@/components/ContentArea/MainContent'

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const [background, setBackground] = useState<string>(theme.background);
  
  useEffect(() => {
    if (window) {
      setBackground(window.innerWidth < 600 ? theme.mobileBackground : theme.background);
    }
  }, []);

  return (
    <RootLayout>
      <div className={styles.background}>
        <video autoPlay loop height="100%" width="100%" src={background}>
        </video>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles["cute-stars"]}></div>
      <ThemeManager />
      <MainContent />
    </RootLayout>
  )
}
