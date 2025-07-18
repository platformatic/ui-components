import * as React from 'react'
import styles from './Icons.module.css'
import { MAIN_DARK_BLUE, MEDIUM } from '../constants'

const ApiIconClosed = ({
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
    case 'extra-large':
      icon = (
        <svg
          width={38}
          height={42}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path
            d='M8.12 22.358A7.12 7.12 0 0 1 8.118 8.12a7.12 7.12 0 0 1 13.631-2.88c.2-.02.404-.029.61-.029a7.121 7.121 0 0 1 6.864 5.236 6.079 6.079 0 1 1 1.7 11.912M13 11.5v7M13 31v-3m0-3v-3.5M25 13v6m0 15.5V31m0-3v-6M19 15.4v7.1m0 18v-4m0-11v8'
            stroke='#fff'
            strokeWidth={2}
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

export default ApiIconClosed
