import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LoginButton.css'

export const LoginButton = ({ icon, label, onClick, ...props }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={['login-button'].join(' ')}
      {...props}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : null} &nbsp;{label}
    </button>
  )
}
