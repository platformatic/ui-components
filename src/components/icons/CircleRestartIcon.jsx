import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MAIN_DARK_BLUE } from '../constants'

const CircleRestartIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case SMALL:
      icon = (
        <svg
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx='9' cy='9' r='8' stroke='none' />
          <path d='M5.05117 6.23517C5.89557 4.88792 7.33948 4 8.97888 4C11.5819 4 13.6921 6.23858 13.6921 9C13.6921 9.50216 13.6224 9.98702 13.4925 10.4443M4.33079 8.16667C4.28793 8.43767 4.26562 8.71607 4.26562 9C4.26562 11.7614 6.37582 14 8.97888 14C10.3866 14 11.6502 13.3453 12.5138 12.3073' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.2388 8.87502L13.47 10.4981L15 9.19192' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.771 9.35161L4.29088 7.98235L3.00014 9.5525' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleRestartIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CircleRestartIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: SMALL
}

export default CircleRestartIcon
