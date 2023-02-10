import * as React from 'react'
import styles from './Icons.module.css'
const PuzzleIcon = ({ color = 'green', size = 'normal', tip = '' }) => {
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
      viewBox='0 0 33 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      data-tip={tip}
    >
      <rect
        x={4.5}
        y={4}
        width={8}
        height={10.0699}
        rx={1}
        stroke='none'
        strokeWidth={1.5}
      />
      <rect
        x={16.5}
        y={4}
        width={12}
        height={10.0699}
        rx={1}
        stroke='none'
        strokeWidth={1.5}
      />
      <rect
        x={28.5}
        y={28}
        width={8}
        height={10.0699}
        rx={1}
        transform='rotate(-180 28.5 28)'
        stroke='none'
        strokeWidth={1.5}
      />
      <rect
        x={16.5}
        y={28}
        width={12}
        height={10.0699}
        rx={1}
        transform='rotate(-180 16.5 28)'
        stroke='none'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default PuzzleIcon
