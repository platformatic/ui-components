import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, EXTRA_LARGE, SIZES, MAIN_DARK_BLUE, MEDIUM } from '../constants'

const GenerationLoadingIcon = ({ color, size, disabled, inactive }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  const filledClassName = styles[`filled-${color}`]

  let icon = <></>

  switch (size) {
    case EXTRA_LARGE:
      icon = (
        <svg
          width={105}
          height={104}
          viewBox='0 0 105 104'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={4.5} y={84} width={96} height={16} rx={8} stroke='none' strokeWidth={3} />
          <rect x={8.5} y={88} width={68} height={8} rx={4} fill='none' className={filledClassName} />
          <path d='M16.5 57.882L15.9114 56.5023C15.3713 56.7327 15.0153 57.2571 15.0005 57.8442C14.9857 58.4312 15.3148 58.9729 15.8426 59.2303L16.5 57.882ZM53.6613 75.9999L53.0039 77.3482C53.4311 77.5565 53.9317 77.55 54.3534 77.3307L53.6613 75.9999ZM61.7122 73.5038C62.4471 73.1216 62.7331 72.2159 62.3509 71.4809C61.9686 70.7459 61.063 70.46 60.328 70.8422L61.7122 73.5038ZM15.8426 59.2303L53.0039 77.3482L54.3186 74.6516L17.1574 56.5337L15.8426 59.2303ZM38.8994 46.6955L15.9114 56.5023L17.0886 59.2617L40.0765 49.4549L38.8994 46.6955ZM54.3534 77.3307L61.7122 73.5038L60.328 70.8422L52.9692 74.6691L54.3534 77.3307Z' fill='none' className={filledClassName} />
          <circle cx={71.5325} cy={59.0305} r={11.0305} stroke='none' strokeWidth={3} />
          <path d='M86.9757 74.4733L80.3574 67.855' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M53.6613 55.5231L16.5 37.4051L35.0806 29.4785M71.0806 29.4785L88.5 37.4051L76.5 43.6457' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M53.6613 37.9712L16.5 19.8532L53.6613 4L88.5 19.8532L53.6613 37.9712Z' stroke='none' strokeWidth={3} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

GenerationLoadingIcon.propTypes = {
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
GenerationLoadingIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default GenerationLoadingIcon
