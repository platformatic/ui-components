import * as React from 'react'
import styles from './Icons.module.css'

const RoundCloseIcon = ({ color = 'green' }) => {
  const className = styles[`${color}`]
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx={12} cy={12} r={11.5} stroke='none' />
      <path
        d='M6 6L18 18'
        stroke='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 18L18 6'
        stroke='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default RoundCloseIcon
