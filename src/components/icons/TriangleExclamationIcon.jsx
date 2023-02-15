import * as React from 'react'
import styles from './Icons.module.css'
const TriangleExclamationIcon = ({ color = 'red' }) => {
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
      <path d='M14 14H2L8 2L14 14Z' stroke='none' strokeLinejoin='round' />
      <path
        d='M8 6V10.5'
        stroke='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx={8} cy={12} r={0.5} fill='none' />
    </svg>
  )
}

export default TriangleExclamationIcon
