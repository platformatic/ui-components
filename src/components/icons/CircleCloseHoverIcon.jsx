import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const CircleCloseHoverIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'medium':
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle
            cx={12}
            cy={12}
            r={11.25}
            fill='none'
            fillOpacity={0.2}
            stroke='none'
            strokeWidth={1.5}
          />
          <path
            d='M6 6L18 18'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6 18L18 6'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

CircleCloseHoverIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

CircleCloseHoverIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default CircleCloseHoverIcon
