import * as React from 'react'
import styles from './Icons.module.css'
const TerminalIcon = ({ color = 'green', size = 'normal' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>
  switch (size) {
    case 'small':
      icon = (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
          <rect x={2} y={2} width={12} height={12} rx={1} stroke='none' />
          <path d='M4 9L6 7L4 5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7 11H11.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default TerminalIcon
