import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LoginButton from './LoginButton'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

test('<LoginButton /> with label', () => {
  const label = 'My Button'
  render(
    <LoginButton label={label} />
  )
  expect(screen.getByTestId('login-button')).toHaveTextContent(label)
  const icon = screen.queryByTestId('login-button-icon')
  expect(icon).not.toBeInTheDocument()
})

test('<LoginButton /> with label and twitter icon', () => {
  const label = 'My Twitter Button'
  render(
    <LoginButton label={label} icon={faTwitter} />
  )
  expect(screen.getByTestId('login-button')).toHaveTextContent(label)
  const icon = screen.queryByTestId('login-button-icon')
  expect(icon).toBeInTheDocument()
})
