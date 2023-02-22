import * as React from 'react'
import styles from './Icons.module.css'
const StopIcon = ({ color = 'green', size = 'normal' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>
  switch (size) {
    case 'small':
      icon = (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
          <circle cx={8} cy={8} r={6} stroke='none' />
          <path d='M3.5 12L12 3.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default StopIcon
