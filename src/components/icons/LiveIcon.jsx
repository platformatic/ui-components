import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const LiveIcon = ({ color, size, disabled, inactive }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  const filledClassName = styles[`filled-${color}`]
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
          <circle cx={8} cy={8.75134} r={1.5} fill='none' className={filledClassName} />
          <path d='M6 6.51526C5.38625 7.06458 5 7.86287 5 8.75137C5 9.63987 5.38625 10.4382 6 10.9875M10 6.51526C10.6137 7.06458 11 7.86287 11 8.75137C11 9.63986 10.6137 10.4382 10 10.9875' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11 5.39722C11.9206 6.2212 12.5 7.41863 12.5 8.75138C12.5 10.0841 11.9206 11.2816 11 12.1055M5 5.39722C4.07938 6.2212 3.5 7.41863 3.5 8.75138C3.5 10.0841 4.07938 11.2816 5 12.1055' stroke='none' strokeLinecap='round' />
          <path d='M12 4.27916C13.2275 5.3778 14 6.97437 14 8.75137C14 10.6328 13.134 12.312 11.779 13.412M4.33558 4C2.91494 5.09726 2 6.81747 2 8.75137C2 10.5434 2.78563 12.152 4.03126 13.2514' stroke='none' strokeLinecap='round' />
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
          <circle cx={12} cy={13.1271} r={2.25} fill='none' className={filledClassName} />
          <path d='M9 9.77295C8.07938 10.5969 7.5 11.7944 7.5 13.1271C7.5 14.4599 8.07938 15.6573 9 16.4813M15 9.77295C15.9206 10.5969 16.5 11.7944 16.5 13.1271C16.5 14.4599 15.9206 15.6573 15 16.4813' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.5 8.09583C17.8809 9.3318 18.75 11.1279 18.75 13.1271C18.75 15.1262 17.8809 16.9223 16.5 18.1583M7.5 8.09583C6.11906 9.3318 5.25 11.1279 5.25 13.1271C5.25 15.1262 6.11906 16.9223 7.5 18.1583' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M18 6.41874C19.8412 8.0667 21 10.4616 21 13.1271C21 15.9492 19.7011 18.4679 17.6684 20.1181M6.50337 6C4.37242 7.64589 3 10.2262 3 13.1271C3 15.8151 4.17845 18.2279 6.0469 19.8771' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <circle cx={20} cy={21.8784} r={3.75} fill='none' className={filledClassName} />
          <path d='M15 16.2882C13.4656 17.6615 12.5 19.6572 12.5 21.8785C12.5 24.0997 13.4656 26.0954 15 27.4687M25 16.2882C26.5344 17.6615 27.5 19.6572 27.5 21.8785C27.5 24.0997 26.5344 26.0954 25 27.4687' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.5 13.493C29.8016 15.553 31.25 18.5466 31.25 21.8784C31.25 25.2103 29.8016 28.2039 27.5 30.2638M12.5 13.493C10.1984 15.553 8.75 18.5466 8.75 21.8784C8.75 25.2103 10.1984 28.2039 12.5 30.2638' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M30 10.6979C33.0687 13.4445 35 17.4359 35 21.8784C35 26.582 32.8351 30.7799 29.4474 33.5301M10.8389 10C7.28736 12.7431 5 17.0437 5 21.8784C5 26.3585 6.96408 30.3799 10.0782 33.1284' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

LiveIcon.propTypes = {
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
LiveIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
inactive: false
}

export default LiveIcon
