import React from 'react'
import styles from './FollowUs.module.css'
import Icons from './icons'

export default function FollowUs ({ label = 'FOLLOW US ON' }) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        {label}
      </div>
      <div className={styles.icon}>
        <a href='https://twitter.com/platformatic' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialTwitterIcon color='white' size='medium' />
        </a>
      </div>
      <div className={styles.icon}>
        <a href='https://www.linkedin.com/company/platformatic/' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialLinkedInIcon color='white' size='medium' />
        </a>
      </div>
      <div className={styles.icon}>
        <a href='https://github.com/platformatic' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialGitHubIcon color='white' size='medium' />
        </a>
      </div>
      <div className={styles.icon}>
        <a href='https://discord.gg/platformatic' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialDiscordIcon color='white' size='medium' />
        </a>
      </div>

    </div>
  )
}
