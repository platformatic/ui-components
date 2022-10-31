import React from 'react'
import styles from './FollowUs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function FollowUs ({ label }) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        {label}
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faTwitter} className='mr-2' data-testid='login-button-icon' />
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faLinkedin} className='mr-2' data-testid='login-button-icon' />
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faGithub} className='mr-2' data-testid='login-button-icon' />
      </div>
    </div>
  )
}
