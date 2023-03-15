import React from 'react'
import LoginButton from './LoginButton'

export default function GHLoginButton ({ onClick, ...props }) {
  return (
    <LoginButton
      label='Continue with Github'
      onClick={onClick}
      iconName='SocialGitHubIcon'
      {...props}
    />
  )
}
