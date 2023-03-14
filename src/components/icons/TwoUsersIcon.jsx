import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const TwoUsersIcon = ({ color, size }) => {
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
          <path d='M6.00001 10C3.79087 10 2 11.4327 2 13.2H10C10 11.4327 8.20916 10 6.00001 10Z' stroke='none' strokeLinejoin='round' />
          <circle cx={6.00011} cy={6.00001} r={2.40001} stroke='none' />
          <path d='M9.19995 8.40002C11.8509 8.40002 14 9.83272 14 11.6H11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.6001 2.61108C8.0247 2.23107 8.5854 2 9.20006 2C10.5255 2 11.6001 3.07452 11.6001 4.40001C11.6001 5.5467 10.7959 6.50556 9.72074 6.74338' stroke='none' strokeLinecap='round' />
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
          <path d='M9.00002 15C5.6863 15 3 17.1491 3 19.8001H15C15 17.1491 12.3137 15 9.00002 15Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <circle cx={8.99991} cy={9.00002} r={3.60001} stroke='none' strokeWidth={1.5} />
          <path d='M13.8 12.6C17.7765 12.6 21.0001 14.7491 21.0001 17.4001H16.5001' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.4001 3.91662C12.037 3.3466 12.8781 3 13.8001 3C15.7883 3 17.4001 4.61178 17.4001 6.60001C17.4001 8.32004 16.1938 9.75833 14.5811 10.1151' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <path d='M15 25.0001C9.47717 25.0001 5 28.5818 5 33.0001H25.0001C25.0001 28.5818 20.5229 25.0001 15 25.0001Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <circle cx='15' cy='15' r='6.00002' stroke='none' strokeWidth={2} />
          <path d='M22.9998 21.0001C29.6272 21.0001 34.9998 24.5818 34.9998 29.0001H27.4999' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19 6.5277C20.0615 5.57767 21.4632 5 22.9999 5C26.3136 5 28.9999 7.6863 28.9999 11C28.9999 13.8667 26.9895 16.2639 24.3016 16.8585' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

TwoUsersIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

TwoUsersIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default TwoUsersIcon
