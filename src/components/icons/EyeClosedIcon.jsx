import * as React from 'react'
import styles from './Icons.module.css'
import { MAIN_DARK_BLUE, SMALL } from '../constants'

const EyeClosedIcon = ({
  color = MAIN_DARK_BLUE,
  size = SMALL,
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
          <path d='M14 8.50024C14 10.1571 11.3137 11.5002 8 11.5002C7.48205 11.5002 6.97943 11.4674 6.5 11.4057C5.14526 11.2314 3.9757 10.8264 3.1687 10.2795C2.43416 9.78172 2 9.16633 2 8.50024C2 6.84339 4.68629 5.50024 8 5.50024C9.30618 5.50024 10.5149 5.70893 11.5 6.06327C13.0141 6.60786 14 7.49648 14 8.50024Z' stroke='none' />
          <ellipse cx='8' cy='8.38486' rx='3' ry='2.88462' stroke='none' />
          <line x1='2' y1='13.7931' x2='13.2929' y2='2.50024' stroke='none' strokeLinecap='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default EyeClosedIcon
