import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, MEDIUM, EXTRA_LARGE, MAIN_DARK_BLUE } from '../constants'

const PullRequestLoadingIcon = ({ color, size, disabled }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
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
          <ellipse cx={48.776} cy={48.6901} rx={4.9655} ry={4.96554} stroke='none' strokeWidth={3} />
          <ellipse cx={48.776} cy={18.8977} rx={4.9655} ry={4.96554} stroke='none' strokeWidth={3} />
          <path d='M48.7754 43.7254V23.8633' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx={68.6393} cy={48.6901} rx={4.9655} ry={4.96554} stroke='none' strokeWidth={3} />
          <path d='M68.638 43.725V21.3626C68.638 19.3884 67.0377 17.7881 65.0636 17.7881H58.707' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M61.2956 13.1924L56.3301 18.1579L61.2956 23.1235' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx={58.7071} cy={33.7932} rx={29.793} ry={29.7932} stroke='none' strokeWidth={3} />
          <path d='M36.588 55.9116L16.5 75.9995' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
        </svg>

      )
      break

    default:
      break
  }
  return icon
}

PullRequestLoadingIcon.propTypes = {
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
PullRequestLoadingIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default PullRequestLoadingIcon
