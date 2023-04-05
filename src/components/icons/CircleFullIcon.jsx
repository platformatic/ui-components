import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, EXTRA_SMALL, LARGE, MEDIUM, SIZES, SMALL } from '../constants'

const CircleFullIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  const filledClassName = styles[`filled-${color}`]
  let icon = <></>

  switch (size) {
    case EXTRA_SMALL:
      icon = (
        <svg
          width={8}
          height={8}
          viewBox='0 0 8 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={4} cy={4} r={3} fill='none' className={filledClassName} />
        </svg>
      )
      break
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
          <circle cx={8} cy={8} r={6} fill='none' className={filledClassName} />
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
          <circle cx={12} cy={12} r={9} fill='none' className={filledClassName} />
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
          <circle cx={20} cy={20} r={15} fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleFullIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CircleFullIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default CircleFullIcon
