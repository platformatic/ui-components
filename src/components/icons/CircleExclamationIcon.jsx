import * as React from 'react'
import styles from './Icons.module.css'
const CircleExclamationIcon = ({ color = 'white', tip = '' }) => {
  const className = styles[`${color}`]

  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      data-tip={tip}
    >
      <circle cx={12} cy={12} r={9} stroke='none' strokeWidth={1.5} />
      <path
        d='M12 8.25V13.5'
        stroke='none'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx={12} cy={15.75} r={0.75} fill='none' />
    </svg>
  )
}

export default CircleExclamationIcon
