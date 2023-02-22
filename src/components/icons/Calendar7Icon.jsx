import * as React from 'react'
import styles from './Icons.module.css'

const Calendar7Icon = ({ color = 'green', size = 'normal' }) => {
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
            d='M2 7H4M14 7H12'
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
            d='M6.46691 13L9.65441 6.52L10.0294 7.1H5.65074L6.33456 6.47V8.29H5V6H11V6.87L8 13H6.46691Z'
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

export default Calendar7Icon
