import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const SocialXIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  disabled = false,
  inactive = false
}) => {
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
          <path d='M9.14154 7.19276L13.6088 2H12.5502L8.67134 6.50886L5.57327 2H2L6.68486 8.81814L2 14.2636H3.05869L7.15496 9.50214L10.4267 14.2636H14L9.14144 7.19276H9.14174H9.14154ZM7.69155 8.87814L7.21686 8.19925L3.44009 2.79689H5.06607L8.11405 7.15676L8.58875 7.83565L12.5507 13.5028H10.9247L7.69165 8.87834V8.87804L7.69155 8.87814Z' fill='none' className={filledClassName} />

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
          <path d='M13.7123 10.7891L20.4132 3H18.8253L13.007 9.76329L8.35991 3H3L10.0273 13.2272L3 21.3954H4.58804L10.7324 14.2532L15.6401 21.3954H21L13.7122 10.7891H13.7126H13.7123ZM11.5373 13.3172L10.8253 12.2989L5.16013 4.19534H7.59911L12.1711 10.7351L12.8831 11.7535L18.8261 20.2542H16.3871L11.5375 13.3175V13.3171L11.5373 13.3172Z' fill='none' className={filledClassName} />
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
          <path d='M22.8539 17.9819L34.022 5H31.3755L21.6784 16.2722L13.9332 5H5L16.7122 22.0454L5 35.659H7.64673L17.8874 23.7553L26.0668 35.659H35L22.8536 17.9819H22.8544H22.8539ZM19.2289 22.1954L18.0421 20.4981L8.60022 6.99223H12.6652L20.2851 17.8919L21.4719 19.5891L31.3768 33.757H27.3118L19.2291 22.1959V22.1951L19.2289 22.1954Z' fill='none' className={filledClassName} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default SocialXIcon
