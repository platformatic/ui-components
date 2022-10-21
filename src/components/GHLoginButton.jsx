import React from 'react'
import PropTypes from 'prop-types'
import { LoginButton } from './LoginButton'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const GHLoginButton = ({ onClick, ...props }) => {
  return (
    <LoginButton
      label='Continue with Github'
      onClick={onClick}
      icon={faGithub}
      {...props}
    />
  )
}
