import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const LayersIcon = ({ color, size }) => {
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
          <path d='M10.5 9.38763L14 10.9803L8.19355 13.9999L2 10.9803L5.83132 9.34583' stroke='none' strokeLinejoin='round' />
          <path d='M11.0968 6.24634L14 7.56744L8.19355 10.5871L2 7.56744L5.09677 6.24634' stroke='none' strokeLinejoin='round' />
          <path d='M8.19355 7.66186L2 4.6422L8.19355 2L14 4.6422L8.19355 7.66186Z' stroke='none' strokeLinejoin='round' />
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
          <path d='M15.75 14.0815L21 16.4705L12.2903 21L3 16.4705L8.74699 14.0188' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M16.6452 9.36963L21 11.3513L12.2903 15.8808L3 11.3513L7.64516 9.36963' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12.2903 11.4928L3 6.9633L12.2903 3L21 6.9633L12.2903 11.4928Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M26.25 23.4693L35 27.4509L20.4839 35.0001L5 27.4509L14.5783 23.3647' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M27.7419 15.616L35 18.9187L20.4839 26.4679L5 18.9187L12.7419 15.616' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M20.4839 19.1547L5 11.6055L20.4839 5L35 11.6055L20.4839 19.1547Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

LayersIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

LayersIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default LayersIcon
