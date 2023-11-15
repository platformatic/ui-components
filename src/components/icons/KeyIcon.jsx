import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const KeyIcon = ({ color, size, disabled }) => {
  let className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
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
          <circle cx={5} cy={10.9015} r={3} stroke='none' />
          <circle cx={5} cy={10.9015} r={3} stroke='none' />
          <path d='M7.1521 8.51137L13.0401 2' stroke='none' strokeLinecap='round' />
          <path d='M13.6705 4.16214L12.9248 3.39704C12.7259 3.19305 12.3971 3.19614 12.2021 3.40384L10.9611 4.72602C10.7805 4.91841 10.7805 5.21801 10.9611 5.4104L11.7103 6.20857C11.9096 6.42096 12.2476 6.41865 12.4441 6.20354L13.6817 4.8483C13.8603 4.65272 13.8554 4.35181 13.6705 4.16214Z' stroke='none' strokeLinecap='round' />

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
          <circle cx={7.5} cy={16.3523} r={4.5} stroke='none' strokeWidth={1.5} />
          <circle cx={7.5} cy={16.3523} r={4.5} stroke='none' strokeWidth={1.5} />
          <path d='M10.728 12.7671L19.56 3' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M20.6705 6.41224L19.2048 4.90852C19.006 4.70452 18.6772 4.70762 18.4822 4.91532L16.2812 7.26024C16.1006 7.45263 16.1006 7.75224 16.2812 7.94463L17.7504 9.50986C17.9497 9.72225 18.2877 9.71994 18.4841 9.50483L20.6817 7.0984C20.8603 6.90282 20.8554 6.6019 20.6705 6.41224Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <circle cx={12.5} cy={27.2538} r={7.5} stroke='none' strokeWidth={2} />
          <circle cx={12.5} cy={27.2538} r={7.5} stroke='none' strokeWidth={2} />
          <path d='M17.8799 21.2784L32.5998 5' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M34.6705 10.9122L31.765 7.93122C31.5661 7.72723 31.2373 7.73032 31.0423 7.93802L26.9213 12.3285C26.7407 12.5208 26.7407 12.8204 26.9213 13.0128L29.8305 16.1122C30.0299 16.3246 30.3678 16.3223 30.5643 16.1072L34.6817 11.5984C34.8603 11.4028 34.8554 11.1019 34.6705 10.9122Z' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

KeyIcon.propTypes = {
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
  disabled: PropTypes.bool
}
KeyIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default KeyIcon
