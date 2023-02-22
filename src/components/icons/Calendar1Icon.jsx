import * as React from 'react'
import styles from './Icons.module.css'

const Calendar1Icon = ({ color = 'green', size = 'normal' }) => {
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
            d='M2 7H5M14 7H11'
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
          <path
            d='M7.59712 13V6.5L8.21223 7.09L7.59712 8H7.5L6.5 9V7L7.5 6H9V13H7.59712Z'
            fill='none'
          />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default Calendar1Icon
