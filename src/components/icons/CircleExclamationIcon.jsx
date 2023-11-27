import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CircleExclamationIcon = ({ color, size, tip, disabled }) => {
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
          data-tip={tip}
          className={className}
        >
          <circle cx={8} cy={8} r={6} stroke='none' />
          <path d='M8 5.5V9' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={8} cy={10.5} r={0.5} fill='none' className={filledClassName} />
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
          data-tip={tip}
        >
          <circle cx={12} cy={12} r={9} stroke='none' strokeWidth={1.5} />
          <path d='M12 8.25V13.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={12} cy={15.75} r={0.75} fill='none' className={filledClassName} />

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
          data-tip={tip}
        >
          <circle cx={20} cy={20} r={15} stroke='none' strokeWidth={2} />
          <path d='M20 13.75V22.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={20} cy={26.25} r={1.25} fill='none' className={filledClassName} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleExclamationIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * tip
   */
  tip: PropTypes.string
}

CircleExclamationIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  tip: ''
}

export default CircleExclamationIcon
