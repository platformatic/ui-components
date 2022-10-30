import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './LoginButton.module.css'

export default function LoginButton ({ icon, label, onClick, ...props }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div
        className={styles.button}
        data-testid='login-button'
        {...props}
      >
        {icon ? <FontAwesomeIcon icon={icon} className='mr-2' data-testid='login-button-icon' /> : null} {label}
      </div>
    </div>
  )
}
