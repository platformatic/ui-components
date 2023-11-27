import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CopyPasteIcon = ({ color, size, disabled }) => {
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
          <path d='M6 13.5V4.94497C6 4.66882 6.22386 4.44497 6.5 4.44497H10.5365C10.6594 4.44497 10.7779 4.4902 10.8696 4.57203L13.833 7.21859C13.9393 7.31345 14 7.44911 14 7.59152V13.5C14 13.7761 13.7761 14 13.5 14H6.5C6.22386 14 6 13.7761 6 13.5Z' stroke='none' strokeLinecap='round' />
          <path d='M10.5 7.78923V4.44497L14 7.78923H10.5Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.5 3.96723L7.36816 2.12196C7.27729 2.0433 7.16112 2.00001 7.04093 2.00001H4.61364H2.5C2.22386 2.00001 2 2.22386 2 2.50001L2.00001 10.6335C2.00001 10.9096 2.22386 11.1335 2.50001 11.1335H5.50001' stroke='none' strokeLinecap='round' />
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
          <path d='M9 20.5V7.16745C9 6.8913 9.22386 6.66745 9.5 6.66745H15.9001C16.023 6.66745 16.1416 6.71268 16.2332 6.79451L20.833 10.9024C20.9393 10.9973 21 11.1329 21 11.2754V20.5C21 20.7761 20.7761 21 20.5 21H9.5C9.22386 21 9 20.7761 9 20.5Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M15.75 11.6838V6.66745L21 11.6838H15.75Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.25 5.95084L10.9818 3.12196C10.8909 3.0433 10.7748 3.00001 10.6546 3.00001H6.92045H3.5C3.22386 3.00001 3 3.22387 3 3.50001L3.00001 16.2002C3.00001 16.4764 3.22387 16.7002 3.50001 16.7002H8.25001' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <path d='M15 34.5V11.6124C15 11.3363 15.2239 11.1124 15.5 11.1124H26.6274C26.7503 11.1124 26.8688 11.1576 26.9605 11.2395L34.833 18.2701C34.9393 18.365 35 18.5006 35 18.643V34.5C35 34.7761 34.7761 35 34.5 35H15.5C15.2239 35 15 34.7761 15 34.5Z' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M26.25 19.4731V11.1124L35 19.4731H26.25Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M23.75 9.91807L18.2091 5.12197C18.1182 5.04331 18.002 5.00001 17.8818 5.00001H11.5341H5.5C5.22386 5.00001 5 5.22387 5 5.50002L5.00002 27.3337C5.00002 27.6099 5.22387 27.8337 5.50002 27.8337H13.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CopyPasteIcon.propTypes = {
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
CopyPasteIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default CopyPasteIcon
