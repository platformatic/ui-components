import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AppOptimizedIcon = ({
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
  let icon = <></>

  switch (size) {
    case SMALL:
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M2 4.87462V10.5015L4 11.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.5403 4.73772L7.27017 2L2 4.73772L7 7.5M12.5403 4.73772V7.74927M12.5403 4.73772L10.7542 5.66556' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.1379 7.5C10.3586 8.3 11.7011 9.5 12.3447 10V13.25C12.3447 13.65 11.2413 13.9167 10.6896 14H8.2069C7.10348 14 7.01153 13.3333 7.10348 13C6.91958 12.9167 6.55177 12.7 6.55177 12.5C6.55177 12.3 6.73568 12.0833 6.82763 12C6.55177 12 6.00006 11.9 6.00006 11.5C6.00006 11.1 6.36787 10.8333 6.55177 10.75C6.36787 10.75 6.00006 10.6 6.00006 10C6.00006 9.4 6.55177 9.25 6.82763 9.25H9.03447L8.48276 7.25C8.39081 6.83333 8.37242 6 9.03447 6C9.86203 6 9.86203 6.5 10.1379 7.5Z' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.3449 9.75011H14V13.7501H12.3449V9.75011Z' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    case MEDIUM:
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M3 7.31193V15.7522L6 17.25' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18.8105 7.10658L10.9053 3L3 7.10658L10.5 11.25M18.8105 7.10658V11.6239M18.8105 7.10658L16.1313 8.49834' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.2068 11.25C15.5379 12.45 17.5516 14.25 18.5171 15V19.875C18.5171 20.475 16.862 20.875 16.0344 21H12.3104C10.6552 21 10.5173 20 10.6552 19.5C10.3794 19.375 9.82766 19.05 9.82766 18.75C9.82766 18.45 10.1035 18.125 10.2414 18C9.82766 18 9.00009 17.85 9.00009 17.25C9.00009 16.65 9.5518 16.25 9.82766 16.125C9.5518 16.125 9.00009 15.9 9.00009 15C9.00009 14.1 9.82766 13.875 10.2414 13.875H13.5517L12.7241 10.875C12.5862 10.25 12.5586 9 13.5517 9C14.793 9 14.793 9.75 15.2068 11.25Z' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18.5173 14.6252H21V20.6252H18.5173V14.6252Z' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case LARGE:
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M5 12.1866V26.2537L10 28.75' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M31.3508 11.8443L18.1754 5L5 11.8443L17.5 18.75M31.3508 11.8443V19.3732M31.3508 11.8443L26.8856 14.1639' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25.3447 18.75C25.8964 20.75 29.2527 23.75 30.8618 25V33.125C30.8618 34.125 28.1033 34.7917 26.724 35H20.5173C17.7587 35 17.5288 33.3333 17.7587 32.5C17.2989 32.2917 16.3794 31.75 16.3794 31.25C16.3794 30.75 16.8392 30.2083 17.0691 30C16.3794 30 15.0002 29.75 15.0002 28.75C15.0002 27.75 15.9197 27.0833 16.3794 26.875C15.9197 26.875 15.0002 26.5 15.0002 25C15.0002 23.5 16.3794 23.125 17.0691 23.125H22.5862L21.2069 18.125C20.977 17.0833 20.931 15 22.5862 15C24.6551 15 24.6551 16.25 25.3447 18.75Z' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30.8622 24.3753H35V34.3753H30.8622V24.3753Z' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AppOptimizedIcon.propTypes = {
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

export default AppOptimizedIcon
