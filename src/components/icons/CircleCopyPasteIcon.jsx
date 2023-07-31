import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MAIN_DARK_BLUE } from '../constants'

const CircleCopyPasteIcon = ({ color, size }) => {
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
          <path d='M7.3335 13.5V6.53746C7.3335 6.26132 7.55735 6.03746 7.8335 6.03746H11.0821C11.205 6.03746 11.3235 6.08269 11.4152 6.16453L13.8332 8.32396C13.9394 8.41882 14.0002 8.55448 14.0002 8.69689V13.5C14.0002 13.7761 13.7763 14 13.5002 14H7.8335C7.55735 14 7.3335 13.7761 7.3335 13.5Z' stroke='none' strokeLinecap='round' />
          <path d='M11.0835 8.82435V6.03746L14.0002 8.82435H11.0835Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.25 5.63936L8.49695 4.12196C8.40607 4.0433 8.28991 4 8.16972 4H6.17803H4.5C4.22386 4 4 4.22386 4 4.50001L4 11.1112C4.00001 11.3874 4.22386 11.6112 4.5 11.6112H6.91667' stroke='none' strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleCopyPasteIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CircleCopyPasteIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: SMALL
}

export default CircleCopyPasteIcon
