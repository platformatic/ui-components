import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const CircleCloseIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'medium':
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={12} cy={12} r={11.5} stroke='none' />
          <path
            d='M6 6L18 18'
            stroke='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6 18L18 6'
            stroke='none'
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

CircleCloseIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CircleCloseIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default CircleCloseIcon
