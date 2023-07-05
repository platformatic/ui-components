import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RequestOwnershipIcon = ({ color, size }) => {
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
          <path d='M11.4972 9.21851L14 10.0705L12.722 13.798L10.2725 12.8395L11.4972 9.21851Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.3374 9.64452C10.9647 9.18301 9.98485 8.26001 9.04764 8.26001C8.11044 8.26001 7.45013 8.75701 7.23713 9.00551H5.85262C5.62187 9.02326 5.16037 9.20786 5.16037 9.80427M5.16037 9.80427L3.40311 8.63276C3.40311 8.63276 2.72078 8.12695 2.23161 8.68601C1.74243 9.24507 2.1606 9.60902 2.28486 9.80427C3.13686 10.532 5.04322 12.0301 5.85262 12.2005C6.66203 12.3709 9.24289 12.378 10.4321 12.3603M5.16037 9.80427C5.16037 10.3581 5.51537 10.532 5.69287 10.5498H7.87613' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M17.2459 13.8276L21 15.1056L19.083 20.6969L15.4087 19.2592L17.2459 13.8276Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.0061 14.4669C16.447 13.7746 14.9773 12.3901 13.5715 12.3901C12.1657 12.3901 11.1752 13.1356 10.8557 13.5084H8.77894C8.43281 13.535 7.74056 13.8119 7.74056 14.7065M7.74056 14.7065L5.10467 12.9493C5.10467 12.9493 4.08117 12.1906 3.34741 13.0291C2.61364 13.8677 3.24091 14.4136 3.42728 14.7065C4.70529 15.7982 7.56483 18.0453 8.77894 18.3009C9.99304 18.5565 13.8643 18.5672 15.6482 18.5405M7.74056 14.7065C7.74056 15.5372 8.27306 15.7982 8.53931 15.8248H11.8142' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M28.7431 23.0464L35 25.1764L31.805 34.4952L25.6812 32.0989L28.7431 23.0464Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.3435 24.1112C27.4116 22.9574 24.9621 20.6499 22.6191 20.6499C20.2761 20.6499 18.6253 21.8924 18.0928 22.5137H14.6316C14.0547 22.558 12.9009 23.0195 12.9009 24.5105M12.9009 24.5105L8.50778 21.5818C8.50778 21.5818 6.80195 20.3173 5.57901 21.7149C4.35607 23.1126 5.40151 24.0224 5.71214 24.5105C7.84215 26.3299 12.608 30.0752 14.6316 30.5012C16.6551 30.9272 23.1072 30.945 26.0804 30.9006M12.9009 24.5105C12.9009 25.8951 13.7884 26.3299 14.2322 26.3743H19.6903' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.985 8.67647C14.985 10.7069 13.3094 12.3529 11.2425 12.3529C9.17558 12.3529 7.5 10.7069 7.5 8.67647C7.5 6.64601 9.17558 5 11.2425 5C13.3094 5 14.985 6.64601 14.985 8.67647ZM14.985 8.67647H22.7695M32.5 8.67647H29.8054M29.8054 8.67647V12.5M29.8054 8.67647H26.2126M26.2126 8.67647V11.1765M26.2126 8.67647H22.7695M22.7695 8.67647V12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

RequestOwnershipIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

RequestOwnershipIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default RequestOwnershipIcon
