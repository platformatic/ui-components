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
          <circle cx={12} cy={12} r={11.5} stroke='none' strokeWidth={1.5} />
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
    case 'large':
      icon = (
        <svg
          width={40}
          height={40}
          className={className}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='20' cy='20' r='19.25' stroke='none' strokeWidth={1.5} />
          <path d='M10 10L30 30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 30L30 10' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
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
