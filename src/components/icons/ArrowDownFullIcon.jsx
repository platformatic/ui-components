import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ArrowDownFullIcon = ({ color, size, disabled }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  const filledClassName = styles[`filled-${color}`]
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
          <path d='M7.29289 10.2929L3.70711 6.70711C3.07714 6.07714 3.52331 5 4.41421 5H11.5858C12.4767 5 12.9229 6.07714 12.2929 6.70711L8.70711 10.2929C8.31658 10.6834 7.68342 10.6834 7.29289 10.2929Z' fill='none' className={filledClassName} />
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
          <path d='M11.2929 15.7929L4.70711 9.20711C4.07714 8.57714 4.52331 7.5 5.41421 7.5H18.5858C19.4767 7.5 19.9229 8.57714 19.2929 9.2071L12.7071 15.7929C12.3166 16.1834 11.6834 16.1834 11.2929 15.7929Z' fill='none' className={filledClassName} />
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
          <path d='M19.2929 26.7929L6.70711 14.2071C6.07714 13.5771 6.52331 12.5 7.41421 12.5H32.5858C33.4767 12.5 33.9229 13.5771 33.2929 14.2071L20.7071 26.7929C20.3166 27.1834 19.6834 27.1834 19.2929 26.7929Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ArrowDownFullIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * disabled
   */
  disabled: PropTypes.bool
}
ArrowDownFullIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default ArrowDownFullIcon
