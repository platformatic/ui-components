import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const InfoCircleIcon = ({
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
          <circle cx='8' cy='8' r='6' transform='rotate(-180 8 8)' stroke='white' />
          <path d='M8 11L8 6.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='8' cy='4.74988' r='0.5' transform='rotate(-180 8 4.74988)' fill='white' />
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
          <circle cx='12' cy='12' r='9' transform='rotate(-180 12 12)' stroke='white' strokeWidth={1.5} />
          <path d='M12 16.5L12 9.75' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='12' cy='7.12488' r='0.75' transform='rotate(-180 12 7.12488)' fill='white' />

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
          <circle cx='20' cy='20' r='15' transform='rotate(-180 20 20)' stroke='white' strokeWidth={2} />
          <path d='M20 27.5L20 16.25' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='20' cy='11.8749' r='1.25' transform='rotate(-180 20 11.8749)' fill='white' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default InfoCircleIcon
