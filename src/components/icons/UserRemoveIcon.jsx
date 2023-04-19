import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const UserRemoveIcon = ({ color, size }) => {
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
          <path d='M7 10.0553C4.16229 10.3727 2 12.018 2 14H8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={8} cy={5} r={3} stroke='none' />
          <circle cx={11} cy={11} r={3} stroke='none' />
          <path d='M10 10L12 12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 12L12 10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M10.5 15.083C6.24343 15.559 3 18.027 3 21H12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={12} cy={7.5} r={4.5} stroke='none' strokeWidth={1.5} />
          <circle cx={16.5} cy={16.5} r={4.5} stroke='none' strokeWidth={1.5} />
          <path d='M15 15L18 18' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 18L18 15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M17.5 25.1383C10.4057 25.9317 5 30.045 5 35H20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={20} cy={12.5} r={7.5} stroke='none' strokeWidth={2} />
          <circle cx={27.5} cy={27.5} r={7.5} stroke='none' strokeWidth={2} />
          <path d='M25 25L30 30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 30L30 25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

UserRemoveIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

UserRemoveIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default UserRemoveIcon
