import * as React from 'react'
import styles from './Icons.module.css'
const PuzzleDynamicIcon = ({ color = 'green', size = 'normal', tip = '' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let dimension = 40
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
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect
        x={3}
        y={3.5}
        width={6}
        height={7.55245}
        rx={1}
        stroke='none'
        strokeWidth={1.5}
      />
      <path
        d='M12 3.5L16.5 7.25L12 11V3.5Z'
        stroke='none'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x={21}
        y={21.5}
        width={6}
        height={7.55245}
        rx={1}
        transform='rotate(-180 21 21.5)'
        stroke='none'
        stroke-width={1.5}
      />
      <rect
        x={12}
        y={21.5}
        width={9}
        height={7.55245}
        rx={1}
        transform='rotate(-180 12 21.5)'
        stroke='#21FA90'
        stroke-width={1.5}
      />
      <path
        d='M16.5 9.5V11L21 7.25L16.5 3.5V5'
        stroke='none'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default PuzzleDynamicIcon
