import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const HorizontalPodAutoscalerIcon = ({
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
          <path d='M7.99996 5L5.21537 6.60769V9.82306L7.99996 11.4307L10.7846 9.82306V6.60769L7.99996 5Z' stroke='none' strokeLinejoin='round' />
          <path d='M11.2154 5L14 6.60769V9.82306L11.2154 11.4307' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.78467 5L2.00008 6.60769V9.82306L4.78467 11.4307' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M12.0002 7.5L7.8233 9.91153V14.7346L12.0002 17.1461L16.1771 14.7346V9.91153L12.0002 7.5Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M16.8231 7.5L21 9.91153V14.7346L16.8231 17.1461' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.17676 7.5L2.99987 9.91153V14.7346L7.17676 17.1461' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M20.0001 12.5L13.0387 16.5192V24.5576L20.0001 28.5769L26.9616 24.5576V16.5192L20.0001 12.5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M28.0385 12.5L35 16.5192V24.5576L28.0385 28.5769' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.9614 12.5L4.99995 16.5192V24.5576L11.9614 28.5769' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default HorizontalPodAutoscalerIcon
