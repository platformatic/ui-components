import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, EXTRA_LARGE, MAIN_DARK_BLUE } from '../constants'

const WorkspaceReadyIcon = ({
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
          <rect x={2} y={2} width={5} height={5} rx={1} stroke='none' />
          <rect x={6} y={14} width={4} height={5.03496} rx={1} transform='rotate(-180 6 14)' stroke='none' />
          <rect x={14} y={14} width={6} height={5.03497} rx={1} transform='rotate(-180 14 14)' stroke='none' />
          <circle cx={11.5} cy={4.5} r={2.5} stroke='none' />
          <path d='M10.25 4.5L11.2917 5.33333L12.5 4.00001' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <rect x={3} y={3} width={7.5} height={7.5} rx={1} stroke='none' strokeWidth={1.5} />
          <rect x={9} y={21} width={6} height={7.55245} rx={1} transform='rotate(-180 9 21)' stroke='none' strokeWidth={1.5} />
          <rect x={21} y={21} width={9} height={7.55245} rx={1} transform='rotate(-180 21 21)' stroke='none' strokeWidth={1.5} />
          <circle cx={17.25} cy={6.75} r={3.75} stroke='none' strokeWidth={1.5} />
          <path d='M15.375 6.75L16.9375 8L18.75 6.00002' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x={5} y={5} width={12.5} height={12.5} rx={1} stroke='none' strokeWidth={2} />
          <rect x={15} y={35} width={10} height={12.5874} rx={1} transform='rotate(-180 15 35)' stroke='none' strokeWidth={2} />
          <rect x={35} y={35} width={15} height={12.5874} rx={1} transform='rotate(-180 35 35)' stroke='none' strokeWidth={2} />
          <circle cx={28.75} cy={11.25} r={6.25} stroke='none' strokeWidth={2} />
          <path d='M25.625 11.25L28.2292 13.3333L31.25 10' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case EXTRA_LARGE:
      icon = (
        <svg
          width={120}
          height={120}
          viewBox='0 0 120 120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect
            x={15}
            y={15}
            width={37.5}
            height={37.5}
            rx={1}
            stroke='none'
            strokeWidth={6.5}
          />
          <rect
            x={45}
            y={105}
            width={30}
            height={37.7622}
            rx={1}
            transform='rotate(-180 45 105)'
            stroke='none'
            strokeWidth={6.5}
          />
          <rect
            x={105}
            y={105}
            width={45}
            height={37.7622}
            rx={1}
            transform='rotate(-180 105 105)'
            stroke='none'
            strokeWidth={6.5}
          />
          <circle
            cx={86.25}
            cy={33.75}
            r={18.75}
            stroke='none'
            strokeWidth={6.5}
          />
          <path
            d='M76.875 33.7499L84.6875 39.9999L93.75 30'
            stroke='none'
            strokeWidth={6.5}
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

export default WorkspaceReadyIcon
