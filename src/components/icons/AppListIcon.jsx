import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, MEDIUM, EXTRA_LARGE, MAIN_DARK_BLUE } from '../constants'

const AppListIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case EXTRA_LARGE:
      icon = (
        <svg
          width={81}
          height={80}
          viewBox='0 0 81 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path
            d='M19.6628 38.0801H11.9961C11.4438 38.0801 10.9961 38.5278 10.9961 39.0801V53.7201C10.9961 54.2724 11.4438 54.7201 11.9961 54.7201H35.9961C36.5484 54.7201 36.9961 54.2724 36.9961 53.7201V39.0801C36.9961 38.5278 36.5484 38.0801 35.9961 38.0801H28.3294'
            stroke='none'
            strokeWidth={2}
            strokeLinecap='round'
          />
          <rect
            x={19.6631}
            y={54.72}
            width={8.66667}
            height={4.16}
            stroke='none'
            strokeWidth={2}
          />
          <path
            d='M15.3291 59.8799C15.3291 59.3276 15.7768 58.8799 16.3291 58.8799H31.6624C32.2147 58.8799 32.6624 59.3276 32.6624 59.8799V61.9999H15.3291V59.8799Z'
            stroke='none'
            strokeWidth={2}
          />
          <path
            d='M23.9958 36L25.9416 41.749H32.2383L27.1441 45.302L29.0899 51.051L23.9958 47.498L18.9016 51.051L20.8474 45.302L15.7533 41.749H22.05L23.9958 36Z'
            stroke='none'
            strokeWidth={2}
            strokeLinejoin='round'
          />
          <path
            d='M20.9961 34H15.9961V25H13.9961'
            stroke='none'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19.9961 29.5V9'
            stroke='none'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M27.9961 35H32V27H38.9961V19'
            stroke='none'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M26 31.5V22H30.9961V14.5'
            stroke='none'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx={11.9961} cy={25} r={2} stroke='none' strokeWidth={2} />
          <circle cx={19.9961} cy={7} r={2} stroke='none' strokeWidth={2} />
          <circle cx={30.9961} cy={12} r={2} stroke='none' strokeWidth={2} />
          <circle cx={38.9961} cy={17} r={2} stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AppListIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

AppListIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default AppListIcon
