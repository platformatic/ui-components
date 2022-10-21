import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './LoginButton.module.css'

export default function LoginButton ({ icon, label, onClick, ...props }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div
        className={styles.button}
        {...props}
      >
        {icon ? <FontAwesomeIcon icon={icon} className='mr-2' /> : null} {label}
      </div>
    </div>
  )
}
