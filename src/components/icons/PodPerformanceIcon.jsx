import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PodPerformanceIcon = ({
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
          <path d='M8 2L13.1962 5V11L8 14L2.80385 11V5L8 2Z' stroke='none' strokeLinejoin='round' />
          <ellipse cx='7.9579' cy='8.32058' rx='2.67225' ry='2.67947' stroke='none' />
          <path d='M7.95781 5.6411V4.66675M6.98608 4.66675H8.92954' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.0271 6.26461L10.3745 5.92406M10.0349 5.57568L10.7142 6.27244' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.99001 6.30134L5.65195 5.95143M5.30298 6.29041L6.00092 5.61246' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.80809 7.10256L7.95778 8.56409' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M12 3L19.7942 7.5V16.5L12 21L4.20577 16.5V7.5L12 3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <ellipse cx='11.9371' cy='12.4808' rx='4.00838' ry='4.0192' stroke='none' strokeWidth={1.5} />
          <path d='M11.9368 8.46165V7.00012M10.4792 7.00012H13.3944' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.0408 9.39692L15.5619 8.88609M15.0525 8.36353L16.0714 9.40866' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.98513 9.45208L8.47804 8.92721M7.95459 9.43567L9.0015 8.41875' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.2125 10.6539L11.937 12.8462' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M20 5L32.9904 12.5V27.5L20 35L7.00962 27.5V12.5L20 5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <ellipse cx='19.895' cy='20.8012' rx='6.68063' ry='6.69867' stroke='none' strokeWidth={2} />
          <path d='M19.8947 14.1026V11.6667M17.4653 11.6667H22.324' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25.0676 15.6615L25.9362 14.8102M25.0872 13.9392L26.7853 15.6811' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.9749 15.7534L14.1297 14.8786M13.2573 15.7261L15.0022 14.0312' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M22.0206 17.7563L19.8948 21.4102' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default PodPerformanceIcon
