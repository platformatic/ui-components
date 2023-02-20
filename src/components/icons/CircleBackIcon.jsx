import * as React from 'react'
import styles from './Icons.module.css'

const CircleBackIcon = ({ color = 'green', size = 'normal' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = (
    <svg
      width={26}
      height={26}
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx={13} cy={13} r={12} fill='none' stroke='none' />
      <path
        d='M14.5 7L8.5 13L14.5 19'
        stroke='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
  switch (size) {
    case 'small':
      icon = (
        <svg
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={9} cy={9} r={8} stroke='none' />
          <path
            d='M10 5L6 9L10 13'
            stroke='none'
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

export default CircleBackIcon
