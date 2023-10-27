import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const GitHubRepo2Icon = ({ color, size }) => {
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
          <path d='M6.15625 3.84375L2 8L8 14L14 8L8 2L6.15625 3.84375ZM6.15625 3.84375L8 5.6875M10.5 8.1875L8 5.6875M8 5.6875V10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='11' cy='8.5' r='1' fill='none' />
          <circle cx='8' cy='10' r='1' fill='none' />
          <circle cx='8' cy='5.5' r='1' fill='none' />
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
        ><path d='M9.23438 5.76562L3 12L12 21L21 12L12 3L9.23438 5.76562ZM9.23438 5.76562L12 8.53125M15.75 12.2812L12 8.53125M12 8.53125V15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='16.5' cy='12.75' r='1.5' fill='none' />
          <circle cx='12' cy='15' r='1.5' fill='none' />
          <circle cx='12' cy='8.25' r='1.5' fill='none' />

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
          <path d='M15.3906 9.60937L5 20L20 35L35 20L20 5L15.3906 9.60937ZM15.3906 9.60937L20 14.2187M26.25 20.4687L20 14.2187M20 14.2187V25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='27.5' cy='21.25' r='2.5' fill='none' />
          <circle cx='20' cy='25' r='2.5' fill='none' />
          <circle cx='20' cy='13.75' r='2.5' fill='none' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

GitHubRepo2Icon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

GitHubRepo2Icon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default GitHubRepo2Icon
