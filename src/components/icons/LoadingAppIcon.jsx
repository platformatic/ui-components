import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, MEDIUM, EXTRA_LARGE, MAIN_DARK_BLUE } from '../constants'

const LoadingAppIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  disabled = false,
  inactive = false
}) => {
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
    case MEDIUM:
      icon = (
        <svg
          width={26}
          height={26}
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={1} y={21} width={24} height={4} rx={2} stroke='none' />
          <rect x={2} y={22} width={17} height={2} rx={1} fill='none' className={filledClassName} />
          <path d='M13.4632 14.0067L12.5 13.2229L7.24671 17L9.25329 10.8885L4 7.11146L10.4934 7.11146L12.5 1L14.5066 7.11146L21 7.11146L15.7467 10.8885L16.0918 11.4054' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={17.1395} cy={15.1775} r={2.75763} stroke='none' />
          <path d='M21.0003 19.0382L19.3457 17.3836' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    case EXTRA_LARGE:
      icon = (
        <svg
          width='105'
          height='104'
          viewBox='0 0 105 104'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={4.5} y={84} width={96} height={16} rx={8} stroke='none' strokeWidth={3} />
          <rect x={8.5} y={88} width={68} height={8} rx={4} fill='none' className={filledClassName} />
          <path d='M54.3526 56.027L50.5 52.8917L29.4868 68L37.5132 43.5542L16.5 28.4458L42.4737 28.4458L50.5 4L58.5263 28.4458L84.5 28.4458L63.4868 43.5542L64.8673 45.6216' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={69.0579} cy={60.71} r={11.0305} stroke='none' strokeWidth={3} />
          <path d='M84.5006 76.1527L77.8823 69.5344' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )

      break
    default:
      break
  }
  return icon
}

LoadingAppIcon.propTypes = {
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

export default LoadingAppIcon
