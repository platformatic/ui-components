import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, LARGE, MAIN_DARK_BLUE, MEDIUM, SIZES, SMALL } from '../constants'

const DatabaseMigrationIcon = ({
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
          <path d='M9.68472 7.77764C12.1783 7.52864 14 6.74093 14 5.80772C14 5.20002 13.2275 4.65402 12 4.2783M6.1467 7.75987C3.74 7.49284 2 6.71977 2 5.80772C2 5.20002 2.7725 4.65402 4 4.2783' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 8.95076C14 9.90681 12.0876 10.7102 9.5 10.938M2 8.95076C2 9.84412 3.66978 10.6042 6 10.8859' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 5.80772V11.9481C14 13.0813 11.3133 14 8 14C4.68667 14 2 13.0813 2 11.9481V5.80772' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 12L8 2M8 2L5.5 5M8 2L10.5 5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M14.5271 11.6665C18.2675 11.293 21 10.1114 21 8.71158C21 7.80002 19.8412 6.98102 18 6.41744M9.22005 11.6398C5.61001 11.2393 3 10.0797 3 8.71158C3 7.80002 4.15875 6.98102 6 6.41744' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21 13.4261C21 14.8602 18.1315 16.0653 14.25 16.407M3 13.4261C3 14.7662 5.50467 15.9063 9 16.3288' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21 8.71157V17.9221C21 19.6219 16.97 20.9999 12 20.9999C7.03 20.9999 3 19.6219 3 17.9221V8.71157' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 18L12 3M12 3L8.25 7.5M12 3L15.75 7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M24.2118 19.4441C30.4458 18.8216 35 16.8523 35 14.5193C35 13 33.0687 11.635 30 10.6957M15.3668 19.3997C9.35001 18.7321 5 16.7994 5 14.5193C5 13 6.93125 11.635 10 10.6957' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M35 22.3769C35 24.767 30.2191 26.7755 23.75 27.345M5 22.3769C5 24.6103 9.17444 26.5104 15 27.2147' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M35 14.5193V29.8702C35 32.7031 28.2833 34.9999 20 34.9999C11.7167 34.9999 5 32.7031 5 29.8702V14.5193' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 30L20 5M20 5L13.75 12.5M20 5L26.25 12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default DatabaseMigrationIcon
