import React from 'react'
import { render, screen } from '@testing-library/react'
import LoginButton from './LoginButton'

test('<LoginButton /> with label', () => {
  const label = 'My Button'
  render(
    <LoginButton label={label} />
  )
  expect(screen.getByTestId('login-button')).toHaveTextContent(label)
  const icon = screen.queryByTestId('login-button-icon')
  expect(icon).toBeFalsy()
})

test.skip('<LoginButton /> with label and twitter icon', () => {
  const label = 'My Twitter Button'
  render(
    <LoginButton label={label} iconName='CircleFullIcon' />
  )
  expect(screen.getByTestId('login-button')).toHaveTextContent(label)
  const icon = screen.queryByTestId('login-button-icon')
  expect(icon).toBeTruthy()
})
