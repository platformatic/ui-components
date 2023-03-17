import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const LoadingAppIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  const filledClassName = styles[`filled-${color}`]

  let icon = <></>

  switch (size) {
    case 'medium':
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
  size: PropTypes.oneOf(SIZES)
}

LoadingAppIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default LoadingAppIcon
