import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, MEDIUM, EXTRA_LARGE, MAIN_DARK_BLUE } from '../constants'

const AppEmptyIcon = ({ color, size, disabled, inactive }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  let icon = <></>

  switch (size) {
    case EXTRA_LARGE:
      icon = (
        <svg width={105} height={105} viewBox='0 0 105 105' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
          <path d='M45.1159 59.7372H31.3467C30.7944 59.7372 30.3467 60.1849 30.3467 60.7372V87.0941C30.3467 87.6464 30.7944 88.0941 31.3467 88.0941H73.6544C74.2067 88.0941 74.6544 87.6464 74.6544 87.0941V60.7372C74.6544 60.1849 74.2067 59.7372 73.6544 59.7372H59.8851' stroke='none' strokeWidth={3} strokeLinecap='round' />
          <rect x={45.116} y={88.0939} width={14.7692} height={7.08923} stroke='none' strokeWidth={3} />
          <path d='M37.7312 96.1831C37.7312 95.6308 38.1789 95.1831 38.7312 95.1831H66.2697C66.8219 95.1831 67.2697 95.6308 67.2697 96.1831V100.5H37.7312V96.1831Z' stroke='none' strokeWidth={3} />
          <path d='M52.5004 56.1924L55.8163 65.9895H66.5468L57.8657 72.0444L61.1816 81.8415L52.5004 75.7865L43.8193 81.8415L47.1352 72.0444L38.4541 65.9895H49.1845L52.5004 56.1924Z' stroke='none' strokeWidth={3} strokeLinejoin='round' />
          <path d='M24.8076 74.6539H11.8845V48.8077' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M37.7307 52.5001V19.2693' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M80.1924 74.6539H93.1155V59.8846' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M63.5769 54.3462V43.2692H76.5V22.9615' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx={11.8846} cy={41.4231} rx={7.38462} ry={7.38462} stroke='none' strokeWidth={3} />
          <ellipse cx={37.7308} cy={11.8846} rx={7.38461} ry={7.38462} stroke='none' strokeWidth={3} />
          <ellipse cx={76.5001} cy={15.5769} rx={7.38462} ry={7.38461} stroke='none' strokeWidth={3} />
          <ellipse cx={93.1153} cy={52.5} rx={7.38462} ry={7.38461} stroke='none' strokeWidth={3} />
        </svg>

      )
      break

    default:
      break
  }
  return icon
}

AppEmptyIcon.propTypes = {
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
  disabled: PropTypes.bool,
  /**
   * inactive
   */
  inactive: PropTypes.bool
}
AppEmptyIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default AppEmptyIcon
