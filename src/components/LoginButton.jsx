import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './LoginButton.module.css'

export default function LoginButton ({ icon, label, onClick, ...props }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={styles.button}
      {...props}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : null} &nbsp;{label}
    </button>
  )
}
