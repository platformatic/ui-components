import * as React from 'react'
import styles from './Icons.module.css'
const MetricsIcon = ({ color = 'white' }) => {
  const className = styles[`${color}`]
  return (
    <svg
      width={40}
      height={40}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect
        x={10}
        y={12.5}
        width={5}
        height={17.5}
        rx={0.5}
        stroke='none'
        strokeWidth={2}
      />
      <rect
        x={20}
        y={20}
        width={5}
        height={10}
        rx={0.5}
        stroke='none'
        strokeWidth={2}
      />
      <rect
        x={30}
        y={5}
        width={5}
        height={25}
        rx={0.5}
        stroke='none'
        strokeWidth={2}
      />
      <path
        d='M5 5V35H35'
        stroke='none'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default MetricsIcon
