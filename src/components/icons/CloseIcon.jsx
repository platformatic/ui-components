import * as React from 'react'
import styles from './Icons.module.css'

const CloseIcon = ({ color = 'main-dark-blue' }) => {
  const className = styles[`${color}`]
  return (
    <svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M2 2L14 14'
        stroke='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 14L14 2'
        stroke='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default CloseIcon
