import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const TeamsIcon = ({ color, size, disabled }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
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
          <path d='M8.0001 9.62964C6.10656 9.62964 4.57153 10.6909 4.57153 12H11.4287C11.4287 10.6909 9.89365 9.62964 8.0001 9.62964Z' stroke='none' strokeLinejoin='round' />
          <ellipse cx={7.99993} cy={6.66668} rx={1.71429} ry={1.77778} stroke='none' />
          <path d='M5.42857 8.74074C3.53502 8.74074 2 9.80199 2 11.1111H3' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 4.10113C5.82129 4.03564 5.62898 4 5.42864 4C4.48187 4 3.71436 4.79594 3.71436 5.77778C3.71436 6.60612 4.26065 7.30215 5 7.49953' stroke='none' strokeLinecap='round' />
          <path d='M10.5714 8.74074C12.465 8.74074 14 9.80199 14 11.1111H13' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.8894 7.52502C11.6842 7.37038 12.2856 6.64692 12.2856 5.77778C12.2856 4.79594 11.5181 4 10.5714 4C10.371 4 10.1787 4.03564 10 4.10113' stroke='none' strokeLinecap='round' />
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
          <path d='M12.0003 14.4444C9.15996 14.4444 6.85742 16.0363 6.85742 18H17.1431C17.1431 16.0363 14.8406 14.4444 12.0003 14.4444Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <ellipse cx={12.0001} cy={10} rx={2.57143} ry={2.66667} stroke='none' strokeWidth={1.5} />
          <path d='M8.14286 13.1111C5.30254 13.1111 3 14.703 3 16.6667H4.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 6.1517C8.73193 6.05346 8.44347 6 8.14296 6C6.7228 6 5.57153 7.19391 5.57153 8.66667C5.57153 9.90919 6.39098 10.9532 7.5 11.2493' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M15.8571 13.1111C18.6975 13.1111 21 14.703 21 16.6667H19.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.3341 11.2875C17.5263 11.0556 18.4285 9.97037 18.4285 8.66667C18.4285 7.19391 17.2772 6 15.857 6C15.5565 6 15.2681 6.05346 15 6.1517' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <path d='M20.0001 24.0741C15.2663 24.0741 11.4287 26.7272 11.4287 30H28.5716C28.5716 26.7272 24.734 24.0741 20.0001 24.0741Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <ellipse cx={19.9998} cy={16.6667} rx={4.28571} ry={4.44444} stroke='none' strokeWidth={2} />
          <path d='M13.5714 21.8519C8.83756 21.8519 5 24.505 5 27.7778H7.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.9998 10.2528C14.553 10.0891 14.0722 10 13.5714 10C11.2044 10 9.28564 11.9898 9.28564 14.4444C9.28564 16.5153 10.6514 18.2554 12.4998 18.7488' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M26.4286 21.8519C31.1624 21.8519 35 24.505 35 27.7778H32.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.2238 18.8125C29.2108 18.426 30.7144 16.6173 30.7144 14.4444C30.7144 11.9898 28.7956 10 26.4286 10C25.9278 10 25.447 10.0891 25.0002 10.2528' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

TeamsIcon.propTypes = {
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
TeamsIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default TeamsIcon
