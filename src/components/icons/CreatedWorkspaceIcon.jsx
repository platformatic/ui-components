import * as React from 'react'
import styles from './Icons.module.css'

const CreatedWorkspaceIcon = ({ color = 'green', size = 'normal' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>
  switch (size) {
    case 'extra-large':
      icon = (
        <svg
          width={120}
          height={120}
          viewBox='0 0 120 120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect
            x={15}
            y={15}
            width={37.5}
            height={37.5}
            rx={1}
            stroke='none'
            strokeWidth={6.5}
          />
          <rect
            x={45}
            y={105}
            width={30}
            height={37.7622}
            rx={1}
            transform='rotate(-180 45 105)'
            stroke='none'
            strokeWidth={6.5}
          />
          <rect
            x={105}
            y={105}
            width={45}
            height={37.7622}
            rx={1}
            transform='rotate(-180 105 105)'
            stroke='none'
            strokeWidth={6.5}
          />
          <circle
            cx={86.25}
            cy={33.75}
            r={18.75}
            stroke='none'
            strokeWidth={6.5}
          />
          <path
            d='M76.875 33.7499L84.6875 39.9999L93.75 30'
            stroke='none'
            strokeWidth={6.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default CreatedWorkspaceIcon
