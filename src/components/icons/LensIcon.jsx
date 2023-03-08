import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const LensIcon = ({ color, size }) => {
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
          <circle cx={7} cy={7} r={5} stroke='none' />
          <path d='M14 14L11 11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <circle cx={10.5} cy={10.5} r={7.5} stroke='none' strokeWidth={1.5} />
          <path d='M21 21L16.5 16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <circle cx={17.5} cy={17.5} r={12.5} stroke='none' strokeWidth={2} />
          <path d='M35 35L27.5 27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

LensIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

LensIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default LensIcon
