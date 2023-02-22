import * as React from 'react'
import styles from './Icons.module.css'

const CalendarIcon = ({ color = 'green', size = 'normal' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>
  switch (size) {
    case 'small':
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={2} y={4} width={12} height={10} rx={1} stroke='none' />
          <path
            d='M2 7H14'
            stroke='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <line
            x1={4.5}
            y1={5.5}
            x2={4.5}
            y2={2.5}
            stroke='none'
            strokeLinecap='round'
          />
          <line
            x1={11.5}
            y1={5.5}
            x2={11.5}
            y2={2.5}
            stroke='none'
            strokeLinecap='round'
          />
          <rect x={4} y={8} width={2} height={2} rx={0.5} fill='none' />
          <rect x={4} y={11} width={2} height={2} rx={0.5} fill='none' />
          <rect x={7} y={8} width={2} height={2} rx={0.5} fill='none' />
          <rect x={10} y={8} width={2} height={2} rx={0.5} fill='none' />
          <rect x={7} y={11} width={2} height={2} rx={0.5} fill='none' />
          <rect x={10} y={11} width={2} height={2} rx={0.5} fill='none' />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default CalendarIcon
