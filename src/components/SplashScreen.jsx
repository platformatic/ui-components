import React, { useEffect, useState } from 'react'
import styles from './SplashScreen.module.css'
import { ERROR_RED, MAIN_GREEN, RICH_BLACK, WHITE } from './constants'
import Icons from './icons'
import Button from './Button'
export default function SplashScreen ({
  success = true,
  timeout = 5000,
  message = '',
  title = 'Operation completed',
  blur = false,
  children,
  onDestroyed = () => {}
}) {
  const [destroyed, setDestroyed] = useState(false)
  useEffect(() => {
    if (destroyed) {
      onDestroyed()
    }
  }, [destroyed])
  useEffect(() => {
    setTimeout(() => {
      setDestroyed(true)
    }, timeout)
  }, [])

  if (destroyed) {
    return null
  }

  function renderIcon () {
    if (success) {
      return <Icons.CircleCheckMarkIcon color={MAIN_GREEN} />
    } else {
      return <Icons.AlertIcon color={ERROR_RED} />
    }
  }
  return (
    <div className={`${styles.container} ${blur ? styles.blur : styles.solid}`} onClick={() => setDestroyed(true)}>
      <div className={styles.content}>
        <div className={styles.icon}>{renderIcon()}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>

        <div className={styles.childrenContainer}>
          {children}
        </div>

        <div className={styles.button}>
          <Button
            color={RICH_BLACK}
            backgroundColor={WHITE}
            onClick={() => setDestroyed(true)}
            label='Dismiss'
            paddingClass='px-2 py-1'
            textClass='text-[13px]'
          />
        </div>

      </div>

    </div>
  )
}
