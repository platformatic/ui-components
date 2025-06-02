import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE, EXTRA_MEDIUM } from '../constants'

const RocketIcon = ({
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
          <path d='M6.0527 8.57904L4.48734 7.01368C4.35482 6.88116 4.26192 6.71377 4.21978 6.53115L3.70625 4.30588C3.62317 3.94585 3.94584 3.62317 4.30588 3.70626L6.53115 4.21978C6.71377 4.26192 6.88087 4.35454 7.0134 4.48706L8.57904 6.0527L11.4211 6.36853L9.90533 7.88433L10.2843 8.76855L8.76848 10.2843L7.88426 9.9054L6.36846 11.4212L6.0527 8.57904Z' stroke='none' strokeLinejoin='round' />
          <path d='M9.21045 11.7371L10.4736 13.0002' stroke='none' strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M11.1055 11.1053L12.3686 12.3685' stroke='none' strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M11.7368 9.21069L13 10.4739' stroke='none' strokeLinecap='round' strokeLinejoin='bevel' />
          <circle cx={6} cy={6} r={1} stroke='none' />

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
          <path d='M9.07905 12.8684L6.62981 10.4192C6.49728 10.2867 6.40405 10.119 6.36191 9.93633L5.46944 6.06894C5.38635 5.70891 5.70903 5.38623 6.06906 5.46932L9.93645 6.36179C10.1191 6.40394 10.2862 6.49655 10.4187 6.62908L12.8686 9.07893L17.1317 9.55267L14.858 11.8264L15.4264 13.1527L13.1527 15.4264L11.8264 14.858L9.55269 17.1317L9.07905 12.8684Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M13.8157 17.6056L15.7104 19.5003' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M16.6582 16.658L18.553 18.5527' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M17.6052 13.816L19.5 15.7108' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <circle cx={9} cy={9} r={1.5} stroke='none' strokeWidth={1.5} />

        </svg>
      )
      break
    case EXTRA_MEDIUM:
      icon = (
        <svg
          width={32}
          height={32}
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M12.1054 17.1576L8.77172 13.8239C8.63919 13.6914 8.54619 13.5239 8.50405 13.3413L7.23262 7.83176C7.14953 7.47172 7.47221 7.14905 7.83225 7.23214L13.3418 8.50356C13.5244 8.5457 13.6915 8.63832 13.824 8.77085L17.1581 12.1049L22.8423 12.7366L19.8107 15.7682L20.5686 17.5366L17.537 20.5682L15.7685 19.8103L12.7369 22.8419L12.1054 17.1576Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M18.4209 23.4736L20.9472 26' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M22.2109 22.21L24.7373 24.7363' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M23.4736 18.4209L26 20.9472' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <circle cx='12' cy='11.9995' r='2' stroke='none' strokeWidth={1.5} />
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
          <path d='M15.1318 21.4475L10.9146 17.2304C10.7821 17.0978 10.6883 16.9296 10.6462 16.7469L8.9958 9.59531C8.91272 9.23527 9.23539 8.9126 9.59543 8.99569L16.7471 10.6461C16.9297 10.6882 17.0968 10.7808 17.2293 10.9133L21.4476 15.1316L28.5528 15.9212L24.7633 19.7107L25.7107 21.9212L21.9212 25.7107L19.7107 24.7634L15.9212 28.5529L15.1318 21.4475Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M23.0261 29.3427L26.184 32.5006' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M27.7637 27.7634L30.9216 30.9213' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M29.342 23.0267L32.5 26.1847' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='bevel' />
          <circle cx={15} cy={15} r={2.5} stroke='none' strokeWidth={2} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default RocketIcon
