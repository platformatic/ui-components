import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, EXTRA_LARGE, MEDIUM, MAIN_DARK_BLUE } from '../constants'

const WorkspaceLoadingIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  disabled = false,
  inactive = false
}) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  const filledClassName = styles[`filled-${color}`]

  let icon = <></>

  switch (size) {
    case EXTRA_LARGE:
      icon = (
        <svg
          width={105}
          height={104}
          viewBox='0 0 105 104'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={15.9297} y={8} width={24.381} height={26.8531} rx={4} stroke='none' strokeWidth={3} />
          <path d='M48.5 12C48.5 9.79086 50.2909 8 52.5 8H85.0714C87.2806 8 89.0714 9.79086 89.0714 12V30.8531C89.0714 33.0623 87.2806 34.8531 85.0714 34.8531H52.5C50.2909 34.8531 48.5 33.0623 48.5 30.8531V12Z' stroke='none' strokeWidth={3} />
          <path d='M52.5 68C52.5 70.2091 50.7091 72 48.5 72L19.9286 72C17.7194 72 15.9286 70.2091 15.9286 68L15.9286 49.1468C15.9286 46.9377 17.7194 45.1468 19.9286 45.1468L48.5 45.1469C50.7091 45.1469 52.5 46.9377 52.5 49.1469L52.5 68Z' stroke='none' strokeWidth={3} />
          <circle cx={71.5344} cy={55.0305} r={11.0305} stroke='none' strokeWidth={3} />
          <path d='M86.9777 70.4728L80.3594 63.8545' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={4.5} y={84} width={96} height={16} rx={8} stroke='none' strokeWidth={3} />
          <rect x={8.5} y={88} width={68} height={8} rx={4} fill='none' className={filledClassName} />
        </svg>

      )
      break

    default:
      break
  }
  return icon
}

export default WorkspaceLoadingIcon
