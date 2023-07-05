import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, EXTRA_LARGE, SIZES, MAIN_DARK_BLUE, MEDIUM } from '../constants'

const MetricsLoadingIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  const filledClassName = styles[`filled-${color}`]

  let icon = <></>

  switch (size) {
    case EXTRA_LARGE:
      icon = (
        <svg
          width={104}
          height={104}
          viewBox='0 0 104 104'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={28} y={22} width={12} height={42} rx={1.2} stroke='none' strokeWidth={3} />
          <rect x={52} y={40} width={12} height={24} rx={1.2} stroke='none' strokeWidth={3} />
          <rect x={76} y={4} width={12} height={60} rx={1.2} stroke='none' strokeWidth={3} />
          <path d='M16 4V76H88' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={4} y={84} width={96} height={16} rx={8} stroke='none' strokeWidth={3} />
          <rect x={8} y={88} width={68} height={8} rx={4} fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

MetricsLoadingIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

MetricsLoadingIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default MetricsLoadingIcon
