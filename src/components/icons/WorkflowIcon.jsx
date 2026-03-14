import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const WorkflowIcon = ({
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
  let icon = <></>

  switch (size) {
    case SMALL:
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={2} y={2} width={5} height={3} stroke='none' strokeLinejoin='round' />
          <path d='M5.5 6.5H10.5V9.5H5.5V6.5Z' stroke='none' strokeLinejoin='round' />
          <rect x={9} y={11} width={5} height={3} stroke='none' strokeLinejoin='round' />
          <path d='M4 5V7.5C4 8.05228 4.44772 8.5 5 8.5H6M7.5 10V11.5C7.5 12.0523 7.94772 12.5 8.5 12.5H9' stroke='none' />
        </svg>
      )
      break
    case MEDIUM:
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={3} y={3} width={7.5} height={4.5} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M8.25 9.75H15.75V14.25H8.25V9.75Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x={13.5} y={16.5} width={7.5} height={4.5} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M6 7.5V11.25C6 12.0784 6.67157 12.75 7.5 12.75H9M11.25 15V17.25C11.25 18.0784 11.9216 18.75 12.75 18.75H13.5' stroke='none' strokeWidth={1.5} />
        </svg>
      )
      break
    case LARGE:
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={5} y={5} width={12.5} height={7.5} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M13.75 16.25H26.25V23.75H13.75V16.25Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x={22.5} y={27.5} width={12.5} height={7.5} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M10 12.5V17.5C10 18.8807 11.1193 20 12.5 20H14M18.75 24V28.75C18.75 30.1307 19.8693 31.25 21.25 31.25H22.5' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default WorkflowIcon
