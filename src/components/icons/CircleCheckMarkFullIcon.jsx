import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const CircleCheckMarkFullIcon = ({ color, size }) => {
  const className = styles.noShrinkForFlex
  const filledClassName = styles[`filled-${color}`]
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
          <path d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z' fill='none' className={filledClassName} />
          <path d='M5.5 12L10 16.5L18.5 8' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleCheckMarkFullIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CircleCheckMarkFullIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default CircleCheckMarkFullIcon
