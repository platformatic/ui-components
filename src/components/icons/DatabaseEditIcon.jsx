import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const DatabaseEditIcon = ({
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
          <rect x='11.7522' y='7.2478' width='2' height='6.47059' transform='rotate(45 11.7522 7.2478)' stroke='none' strokeLinejoin='round' />
          <path d='M8.59097 13.2373L7.17676 11.8231L6.63603 13.7781L8.59097 13.2373Z' stroke='none' strokeLinejoin='round' />
          <path d='M12.2929 6.70711C12.6834 6.31658 13.3166 6.31658 13.7071 6.70711V6.70711C14.0976 7.09763 14.0976 7.7308 13.7071 8.12132L13.1664 8.66205L11.7522 7.24784L12.2929 6.70711Z' stroke='none' />
          <path d='M6.50001 5.60541C8.9853 5.60541 11 4.79831 11 3.80271C11 2.8071 8.9853 2 6.50001 2C4.01472 2 2 2.8071 2 3.80271C2 4.79831 4.01472 5.60541 6.50001 5.60541Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.50001 8.36667C4.01501 8.36667 2 7.55953 2 6.56396' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11 3.80273V6M2 3.80273V9.19735C2 10.0248 3.39187 10.7221 5.28863 10.934' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x='17.6284' y='10.8717' width='3' height='9.70588' transform='rotate(45 17.6284 10.8717)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12.8865 19.8561L10.7651 17.7347L9.95404 20.6672L12.8865 19.8561Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M18.7929 9.70711C19.1834 9.31658 19.8166 9.31658 20.2071 9.70711L20.9142 10.4142C21.3047 10.8047 21.3047 11.4379 20.9142 11.8284L19.7496 12.9931L17.6282 10.8718L18.7929 9.70711Z' stroke='none' strokeWidth={1.5} />
          <path d='M9.75002 8.40812C13.478 8.40812 16.5 7.19747 16.5 5.70406C16.5 4.21065 13.478 3 9.75002 3C6.02209 3 3 4.21065 3 5.70406C3 7.19747 6.02209 8.40812 9.75002 8.40812Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.75002 12.5501C6.02251 12.5501 3 11.3394 3 9.84607' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.5 5.70398V8.99988M3 5.70398V13.7959C3 15.037 5.0878 16.083 7.93294 16.4008' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x='29.3806' y='18.1195' width='5' height='16.1765' transform='rotate(45 29.3806 18.1195)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M21.4774 33.0934L17.9419 29.5579L16.5901 34.4452L21.4774 33.0934Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M31.0858 16.4142C31.8668 15.6332 33.1332 15.6332 33.9142 16.4142L34.6213 17.1213C35.4024 17.9024 35.4024 19.1687 34.6213 19.9497L32.9159 21.6551L29.3804 18.1196L31.0858 16.4142Z' stroke='none' strokeWidth={2} />
          <path d='M16.25 14.0135C22.4633 14.0135 27.5001 11.9958 27.5001 9.50676C27.5001 7.01775 22.4633 5 16.25 5C10.0368 5 5 7.01775 5 9.50676C5 11.9958 10.0368 14.0135 16.25 14.0135Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.25 20.9168C10.0375 20.9168 5 18.899 5 16.41' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.5001 9.50671V14.9999M5 9.50671V22.9933C5 25.0618 8.47967 26.805 13.2216 27.3348' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

DatabaseEditIcon.propTypes = {
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

export default DatabaseEditIcon
