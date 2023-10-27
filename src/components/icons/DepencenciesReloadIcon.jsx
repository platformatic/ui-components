import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const DepencenciesReloadIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
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
          <path d='M7.5 4.68387L10.5 4.68384V7.5M4 4.68387L2 4.68387V10.3981H6V12.1296H4V13.4283H7' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.69783 2L4.5 2.95237M5.69783 2L7 2.95237M5.69783 2V5.33329M5.69783 5.33329L3.5 8.19039H8L5.69783 5.33329Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.19653 9.85861C8.68912 9.14007 9.53144 8.6665 10.4878 8.6665C12.0063 8.6665 13.2373 9.86043 13.2373 11.3332C13.2373 11.601 13.1966 11.8596 13.1209 12.1035M7.7763 10.8888C7.7513 11.0333 7.73828 11.1818 7.73828 11.3332C7.73828 12.806 8.96928 13.9999 10.4878 13.9999C11.309 13.9999 12.0461 13.6507 12.5499 13.0971' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.3896 11.2666L13.1079 12.1322L14.0004 11.4356' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.61621 11.521L7.75277 10.7907L6.99981 11.6281' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M11.25 7.02592L15.75 7.02588V11.2501M6 7.02592L3 7.02592V15.5973H9V18.1945H6V20.1425H10.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.54675 3L6.75 4.42855M8.54675 3L10.5 4.42855M8.54675 3V7.99993M8.54675 7.99993L5.25 12.2856H12L8.54675 7.99993Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.2953 14.7879C13.0342 13.7101 14.2976 12.9998 15.7322 12.9998C18.01 12.9998 19.8565 14.7906 19.8565 16.9998C19.8565 17.4016 19.7954 17.7895 19.6818 18.1553M11.6649 16.3331C11.6274 16.55 11.6079 16.7727 11.6079 16.9998C11.6079 19.209 13.4544 20.9999 15.7322 20.9999C16.964 20.9999 18.0697 20.4761 18.8254 19.6457' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18.5845 16.8999L19.6619 18.1984L21.0006 17.1534' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.9248 17.2812L11.6296 16.1858L10.5002 17.442' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M18.75 11.7098L26.25 11.7097V18.7501M10 11.7098L5 11.7098V25.9953H15V30.3241H10V33.5708H17.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.2446 5L11.25 7.38092M14.2446 5L17.5 7.38092M14.2446 5V13.3332M14.2446 13.3332L8.75 20.476H20L14.2446 13.3332Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.4918 24.647C21.7233 22.8507 23.8291 21.6667 26.22 21.6667C30.0163 21.6667 33.0938 24.6516 33.0938 28.3335C33.0938 29.0031 32.992 29.6496 32.8027 30.2593M19.4412 27.2224C19.3787 27.5837 19.3462 27.9549 19.3462 28.3335C19.3462 32.0155 22.4237 35.0003 26.22 35.0003C28.273 35.0003 30.1158 34.1274 31.3753 32.7433' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30.9741 28.1665L32.7698 30.3306L35.0011 28.589' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.541 28.8025L19.3824 26.9768L17.5 29.0704' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

DepencenciesReloadIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

DepencenciesReloadIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default DepencenciesReloadIcon
