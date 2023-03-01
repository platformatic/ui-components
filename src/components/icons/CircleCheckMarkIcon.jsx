import * as React from 'react'
import styles from './Icons.module.css'

const CircleCheckMarkIcon = ({ color = 'green', size = 'small' }) => {
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
          <circle
            cx={8}
            cy={8}
            r={6}
            stroke='none'
          />
          <path
            d='M5 8L7.5 10L11 6'
            stroke='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
      break
    case 'large':
      icon = (
        <svg
          width={40}
          height={41}
          viewBox='0 0 40 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle
            cx={20}
            cy={20.3334}
            r={15}
            stroke='none'
            strokeWidth={2.5}
          />
          <path
            d='M12.5 20.3334L18.75 25.3334L27.5 15.3334'
            stroke='none'
            strokeWidth={2.5}
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

export default CircleCheckMarkIcon
