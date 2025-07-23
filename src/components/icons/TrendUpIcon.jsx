import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MAIN_DARK_BLUE } from '../constants'

const TrendUpIcon = ({
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

          <path d='M0.833984 12.25L4.00284 6.3084C4.36862 5.62256 5.34277 5.59797 5.74268 6.2645L6.94318 8.26533C7.33917 8.9253 8.30105 8.90928 8.67483 8.23648L12.834 0.75M12.834 0.75L9.33398 1.75M12.834 0.75V4.75' stroke='white' strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default TrendUpIcon
