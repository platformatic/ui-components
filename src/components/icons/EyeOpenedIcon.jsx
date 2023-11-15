import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, MAIN_DARK_BLUE, SIZES, SMALL } from '../constants'

const EyeOpenedIcon = ({ color, size, disabled }) => {
  let className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
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
          <ellipse cx='8' cy='8' rx='6' ry='3' stroke='none' />
          <ellipse cx='8' cy='7.88462' rx='3' ry='2.88462' stroke='none' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

EyeOpenedIcon.propTypes = {
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
EyeOpenedIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: SMALL,
  disabled: false
}

export default EyeOpenedIcon
