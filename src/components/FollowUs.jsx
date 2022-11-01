import React from 'react'
import styles from './FollowUs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function FollowUs ({ label = 'FOLLOW US ON' }) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        {label}
      </div>
      <div className={styles.icon}>
        <a href='https://twitter.com/platformatic' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} className='mr-2 text-white' />
        </a>
      </div>
      <div className={styles.icon}>
        <a href='https://www.linkedin.com/company/platformatic/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} className='mr-2 text-white' />
        </a>
      </div>
      <div className={styles.icon}>
        <a href='https://github.com/platformatic' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} className='mr-2 text-white' />
        </a>
      </div>
      <div className={styles.icon}>
        <a href='https://discord.gg/platformatic' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faDiscord} className='mr-2 text-white' />
        </a>
      </div>

    </div>
  )
}
