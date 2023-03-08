import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const AlertIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'small':
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M14 14H2L8 2L14 14Z' stroke='none' strokeLinejoin='round' />
          <path d='M8 6V10.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='8' cy='12' r='0.5' fill='none' />
        </svg>
      )
      break
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
          <path d='M21 21H3L12 3L21 21Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12 9V15.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={12} cy={18} r={0.75} fill='none' />
        </svg>
      )
      break
    case 'large':
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M35 35H5L20 5L35 35Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M20 15V26.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={20} cy={30} r={1.25} fill='none' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AlertIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

AlertIcon.defaultProps = {
  color: 'red',
  size: 'medium'
}

export default AlertIcon
