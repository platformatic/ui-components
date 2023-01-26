import * as React from 'react'
import styles from './Icons.module.css'
const PuzzleIcon = ({ color = 'green', size = 'normal', tip = '' }) => {
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
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      data-tip={tip}
    >
      <rect
        x={5}
        y={5}
        width={10}
        height={12.5874}
        rx={1}
        stroke='none'
        strokeWidth={1.5}
      />
      <rect
        x={20}
        y={5}
        width={15}
        height={12.5874}
        rx={1}
        stroke='none'
        strokeWidth={1.5}
      />
      <rect
        x={35}
        y={35}
        width={10}
        height={12.5874}
        rx={1}
        transform='rotate(-180 35 35)'
        stroke='none'
        strokeWidth={1.5}
      />
      <rect
        x={20}
        y={35}
        width={15}
        height={12.5874}
        rx={1}
        transform='rotate(-180 20 35)'
        stroke='none'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default PuzzleIcon
