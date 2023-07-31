import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MAIN_DARK_BLUE } from '../constants'

const CircleEditIcon = ({ color, size }) => {
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
          <rect x='11.0552' y='5.50607' width='2.11765' height='7.76471' transform='rotate(45 11.0552 5.50607)' stroke='none' strokeLinejoin='round' />
          <path d='M7.06234 12.494L5.56494 10.9966L4.81624 13.2427L7.06234 12.494Z' stroke='none' strokeLinejoin='round' />
          <path d='M11.8456 4.71577C12.2362 4.32525 12.8693 4.32525 13.2598 4.71577L13.343 4.79896C13.7336 5.18949 13.7336 5.82265 13.343 6.21318L12.5527 7.00347L11.0553 5.50607L11.8456 4.71577Z' stroke='none' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleEditIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CircleEditIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: SMALL
}

export default CircleEditIcon
