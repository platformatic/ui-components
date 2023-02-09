import * as React from 'react'
import styles from './Icons.module.css'
const PuzzleDynamicIcon = ({ color = 'green', size = 'normal' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let dimension = 33
  switch (size) {
    case 'small':
      dimension = 24
      break
    default:
      break
  }
  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox='0 0 32 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect
        x={4}
        y={4.83325}
        width={8}
        height={10.0699}
        rx={1}
        stroke='none'
        strokeWidth={1.5}
      />
      <path
        d='M16 4.83325L22 9.83325L16 14.8333V4.83325Z'
        stroke='none'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x={28}
        y={28.8333}
        width={8}
        height={10.0699}
        rx={1}
        transform='rotate(-180 28 28.8333)'
        stroke='none'
        strokeWidth={1.5}
      />
      <rect
        x={16}
        y={28.8333}
        width={12}
        height={10.0699}
        rx={1}
        transform='rotate(-180 16 28.8333)'
        stroke='none'
        strokeWidth={1.5}
      />
      <path
        d='M22 12.8333V14.8333L28 9.83325L22 4.83325V6.83325'
        stroke='none'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default PuzzleDynamicIcon
