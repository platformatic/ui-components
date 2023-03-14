import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const CircleTwoArrowsDownIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'small':
      icon = (
        <svg
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={9} cy={9} r={8} stroke='none' />
          <path d='M6 9.40009L9 12.4001L12 9.40009' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 6L9 9L12 6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
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
          <circle cx={13} cy={13} r={12} stroke='none' strokeWidth={1.5} />
          <path d='M8.5 13.6001L13 18.1001L17.5 13.6001' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.5 8.5L13 13L17.5 8.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    case 'large':
      icon = (
        <svg
          width={42}
          height={42}
          viewBox='0 0 42 42'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={21} cy={21} r={20} stroke='none' strokeWidth={2} />
          <path d='M13.5 22.0002L21 29.5002L28.5 22.0002' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.5 13.5L21 21L28.5 13.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    default:
      break
  }
  return icon
}

CircleTwoArrowsDownIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CircleTwoArrowsDownIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default CircleTwoArrowsDownIcon
