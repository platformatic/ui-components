import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const SocialNPMIcon = ({ color, size, disabled }) => {
  let className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
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
          <path d='M1.33325 5.33334H14.6666V9.77779H7.99992V10.5185H5.03696V9.77779H1.33325V5.33334ZM2.07399 9.03705H3.55547V6.81483H4.29621V9.03705H5.03696V6.07408H2.07399V9.03705ZM5.7777 6.07408V9.77779H7.25918V9.03705H8.74066V6.07408H5.7777ZM7.25918 6.81483H7.99992V8.29631H7.25918V6.81483ZM9.4814 6.07408V9.03705H10.9629V6.81483H11.7036V9.03705H12.4444V6.81483H13.1851V9.03705H13.9258V6.07408H9.4814Z' fill='none' className={filledClassName} />
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
          <path d='M2 8H22V14.6667H12V15.7778H7.55556V14.6667H2V8ZM3.11111 13.5556H5.33333V10.2222H6.44444V13.5556H7.55556V9.11111H3.11111V13.5556ZM8.66667 9.11111V14.6667H10.8889V13.5556H13.1111V9.11111H8.66667ZM10.8889 10.2222H12V12.4444H10.8889V10.2222ZM14.2222 9.11111V13.5556H16.4444V10.2222H17.5556V13.5556H18.6667V10.2222H19.7778V13.5556H20.8889V9.11111H14.2222Z' fill='none' className={filledClassName} />
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
          <path d='M3.33325 13.3333H36.6666V24.4445H19.9999V26.2963H12.5925V24.4445H3.33325V13.3333ZM5.1851 22.5926H8.88881V17.037H10.7407V22.5926H12.5925V15.1852H5.1851V22.5926ZM14.4444 15.1852V24.4445H18.1481V22.5926H21.8518V15.1852H14.4444ZM18.1481 17.037H19.9999V20.7408H18.1481V17.037ZM23.7036 15.1852V22.5926H27.4073V17.037H29.2592V22.5926H31.111V17.037H32.9629V22.5926H34.8147V15.1852H23.7036Z' fill='none' className={filledClassName} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

SocialNPMIcon.propTypes = {
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
SocialNPMIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default SocialNPMIcon
