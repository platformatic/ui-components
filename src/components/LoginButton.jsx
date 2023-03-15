import React from 'react'
import Button from './Button'

export default function LoginButton ({ iconName, label, onClick, ...props }) {
  return (
    <Button backgroundColor='main-green' alt={label} label={label} platformaticIcon={{ iconName, size: 'medium', color: 'main-dark-blue' }} data-testid='login-button' size='extra-large' onClick={onClick} {...props} bold />
  )
}
