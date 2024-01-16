import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PlatformaticDBIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M7.99994 7.54958C9.44008 7.54958 10.6076 6.89339 10.6076 6.08393C10.6076 5.27448 9.44008 4.61829 7.99994 4.61829C6.5598 4.61829 5.39233 5.27448 5.39233 6.08393C5.39233 6.89339 6.5598 7.54958 7.99994 7.54958Z' stroke='none' strokeWidth={0.817424} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.6076 7.54956C10.6076 8.35901 9.44015 9.01521 7.99994 9.01521C6.55973 9.01521 5.39233 8.35901 5.39233 7.54956' stroke='none' strokeWidth={0.817424} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.39233 6.08386V9.01494C5.39233 9.82439 6.55973 10.4806 7.99994 10.4806C9.44015 10.4806 10.6076 9.82439 10.6076 9.01494V6.08386' stroke='none' strokeWidth={0.817424} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.31616 4.14833C4.41581 2.83875 6.10542 2 8.00008 2C11.3138 2 14.0001 4.56489 14.0001 7.72888C14.0001 10.8929 11.3138 13.4578 8.00008 13.4578C6.9002 13.4578 5.86944 13.1751 4.98303 12.682' stroke='none' strokeWidth={0.817424} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.13599 6.5105C2.24488 6.03013 2.41698 5.57233 2.64341 5.14514' stroke='none' strokeWidth={0.817424} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.1023 8.78753C2.03524 8.44434 2 8.09052 2 7.72888' stroke='none' strokeWidth={0.817424} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.81374 10.6113C2.68665 10.4034 2.57298 10.187 2.47363 9.96338' stroke='none' strokeWidth={0.817424} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.22998 11.9454L4.55493 12.5072L5.2922 14' stroke='none' strokeWidth={0.817424} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M11.9998 11.3243C14.16 11.3243 15.9112 10.34 15.9112 9.12584C15.9112 7.91166 14.16 6.92737 11.9998 6.92737C9.83958 6.92737 8.08838 7.91166 8.08838 9.12584C8.08838 10.34 9.83958 11.3243 11.9998 11.3243Z' stroke='none' strokeWidth={1.22614} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.9112 11.3243C15.9112 12.5385 14.1601 13.5228 11.9998 13.5228C9.83948 13.5228 8.08838 12.5385 8.08838 11.3243' stroke='none' strokeWidth={1.22614} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.08838 9.12585V13.5225C8.08838 14.7366 9.83948 15.7209 11.9998 15.7209C14.1601 15.7209 15.9112 14.7366 15.9112 13.5225V9.12585' stroke='none' strokeWidth={1.22614} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.97437 6.2225C6.62384 4.25813 9.15825 3 12.0002 3C16.9708 3 21.0002 6.84733 21.0002 11.5933C21.0002 16.3393 16.9708 20.1866 12.0002 20.1866C10.3504 20.1866 8.80427 19.7627 7.47467 19.0229' stroke='none' strokeWidth={1.22614} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.2041 9.7657C3.36745 9.04514 3.62559 8.35844 3.96524 7.71765' stroke='none' strokeWidth={1.22614} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.15346 13.1812C3.05286 12.6665 3 12.1357 3 11.5933' stroke='none' strokeWidth={1.22614} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.22036 15.917C4.02973 15.6051 3.85923 15.2804 3.71021 14.9451' stroke='none' strokeWidth={1.22614} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.3451 17.9181L6.83252 18.7608L7.93842 20.9999' stroke='none' strokeWidth={1.22614} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M19.9997 18.8739C23.6001 18.8739 26.5188 17.2334 26.5188 15.2098C26.5188 13.1861 23.6001 11.5457 19.9997 11.5457C16.3994 11.5457 13.4807 13.1861 13.4807 15.2098C13.4807 17.2334 16.3994 18.8739 19.9997 18.8739Z' stroke='none' strokeWidth={2.04356} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.519 18.8739C26.519 20.8975 23.6005 22.538 20 22.538C16.3995 22.538 13.481 20.8975 13.481 18.8739' stroke='none' strokeWidth={2.04356} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.481 15.2097V22.5374C13.481 24.561 16.3995 26.2015 20 26.2015C23.6005 26.2015 26.519 24.561 26.519 22.5374V15.2097' stroke='none' strokeWidth={2.04356} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.29053 10.3708C11.0397 7.09688 15.2637 5 20.0003 5C28.2846 5 35.0003 11.4122 35.0003 19.3222C35.0003 27.2322 28.2846 33.6444 20.0003 33.6444C17.2506 33.6444 14.6737 32.9378 12.4577 31.7049' stroke='none' strokeWidth={2.04356} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.34033 16.2762C5.61257 15.0753 6.04282 13.9308 6.6089 12.8628' stroke='none' strokeWidth={2.04356} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.25576 21.9688C5.08809 21.1108 5 20.2262 5 19.3221' stroke='none' strokeWidth={2.04356} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.0341 26.5283C6.71639 26.0084 6.43221 25.4674 6.18384 24.9084' stroke='none' strokeWidth={2.04356} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.5751 29.8635L11.3875 31.268L13.2306 34.9999' stroke='none' strokeWidth={2.04356} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PlatformaticDBIcon.propTypes = {
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
PlatformaticDBIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default PlatformaticDBIcon
