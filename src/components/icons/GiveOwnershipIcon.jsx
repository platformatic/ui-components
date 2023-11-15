import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const GiveOwnershipIcon = ({ color, size, disabled }) => {
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
          <path d='M4.50276 9.21851L2 10.0705L3.27801 13.798L5.72752 12.8395L4.50276 9.21851Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.6626 9.64452C5.03535 9.18301 6.01515 8.26001 6.95236 8.26001C7.88956 8.26001 8.54987 8.75701 8.76287 9.00551H10.1474C10.3781 9.02326 10.8396 9.20786 10.8396 9.80427M10.8396 9.80427L12.5969 8.63276C12.5969 8.63276 13.2792 8.12695 13.7684 8.68601C14.2576 9.24507 13.8394 9.60902 13.7151 9.80427C12.8631 10.532 10.9568 12.0301 10.1474 12.2005C9.33797 12.3709 6.75711 12.378 5.56785 12.3603M10.8396 9.80427C10.8396 10.3581 10.4846 10.532 10.3071 10.5498H8.12387' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.99401 3.47059C5.99401 4.28277 5.32378 4.94118 4.49701 4.94118C3.67023 4.94118 3 4.28277 3 3.47059C3 2.6584 3.67023 2 4.49701 2C5.32378 2 5.99401 2.6584 5.99401 3.47059ZM5.99401 3.47059H9.10778M13 3.47059H11.9222M11.9222 3.47059V5M11.9222 3.47059H10.485M10.485 3.47059V4.47059M10.485 3.47059H9.10778M9.10778 3.47059V5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M6.75414 13.8276L3 15.1056L4.91701 20.6969L8.59128 19.2592L6.75414 13.8276Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.9939 14.4669C7.55302 13.7746 9.02273 12.3901 10.4285 12.3901C11.8343 12.3901 12.8248 13.1356 13.1443 13.5084H15.2211C15.5672 13.535 16.2594 13.8119 16.2594 14.7065M16.2594 14.7065L18.8953 12.9493C18.8953 12.9493 19.9188 12.1906 20.6526 13.0291C21.3864 13.8677 20.7591 14.4136 20.5727 14.7065C19.2947 15.7982 16.4352 18.0453 15.2211 18.3009C14.007 18.5565 10.1357 18.5672 8.35178 18.5405M16.2594 14.7065C16.2594 15.5372 15.7269 15.7982 15.4607 15.8248H12.1858' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.99102 5.20588C8.99102 6.42416 7.98567 7.41176 6.74551 7.41176C5.50535 7.41176 4.5 6.42416 4.5 5.20588C4.5 3.98761 5.50535 3 6.74551 3C7.98567 3 8.99102 3.98761 8.99102 5.20588ZM8.99102 5.20588H13.6617M19.5 5.20588H17.8832M17.8832 5.20588V7.5M17.8832 5.20588H15.7275M15.7275 5.20588V6.70588M15.7275 5.20588H13.6617M13.6617 5.20588V7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M11.2569 23.0464L5 25.1764L8.19502 34.4952L14.3188 32.0989L11.2569 23.0464Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.6565 24.1112C12.5884 22.9574 15.0379 20.6499 17.3809 20.6499C19.7239 20.6499 21.3747 21.8924 21.9072 22.5137H25.3684C25.9453 22.558 27.0991 23.0195 27.0991 24.5105M27.0991 24.5105L31.4922 21.5818C31.4922 21.5818 33.198 20.3173 34.421 21.7149C35.6439 23.1126 34.5985 24.0224 34.2879 24.5105C32.1579 26.3299 27.392 30.0752 25.3684 30.5012C23.3449 30.9272 16.8928 30.945 13.9196 30.9006M27.0991 24.5105C27.0991 25.8951 26.2116 26.3299 25.7678 26.3743H20.3097' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.985 8.67647C14.985 10.7069 13.3094 12.3529 11.2425 12.3529C9.17558 12.3529 7.5 10.7069 7.5 8.67647C7.5 6.64601 9.17558 5 11.2425 5C13.3094 5 14.985 6.64601 14.985 8.67647ZM14.985 8.67647H22.7695M32.5 8.67647H29.8054M29.8054 8.67647V12.5M29.8054 8.67647H26.2126M26.2126 8.67647V11.1765M26.2126 8.67647H22.7695M22.7695 8.67647V12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

GiveOwnershipIcon.propTypes = {
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
GiveOwnershipIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default GiveOwnershipIcon
