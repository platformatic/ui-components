import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE, EXTRA_MEDIUM } from '../constants'

const CodeTestingIcon = ({
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
  const filledClassName = styles[`filled-${color}`]

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
          <path d='M6.5 11H3C2.44772 11 2 10.5523 2 10V3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V5.5' stroke='none' strokeLinecap='round' />
          <path d='M2 4.25H11' stroke='none' />
          <circle cx='3.125' cy='3.125' r='0.375' fill='none' className={filledClassName} />
          <circle cx='4.25' cy='3.125' r='0.375' fill='none' className={filledClassName} />
          <circle cx='5.375' cy='3.125' r='0.375' fill='none' className={filledClassName} />
          <path d='M3.5 5.75H7.25' stroke='none' strokeLinecap='round' />
          <path d='M4.25 7.25H7.5' stroke='none' strokeLinecap='round' />
          <path d='M4.25 8.75H6.5' stroke='none' strokeLinecap='round' />
          <path d='M12.3639 11.6957C13.0262 11.2197 13.4545 10.4621 13.4545 9.6087C13.4545 8.16795 12.2335 7 10.7273 7C9.22104 7 8 8.16795 8 9.6087C8 11.0494 9.22104 12.2174 10.7273 12.2174C11.3414 12.2174 11.908 12.0233 12.3639 11.6957ZM12.3639 11.6957L14 13.7826' stroke='none' strokeLinecap='round' />
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
          <path d='M9.75 16.5H4C3.44772 16.5 3 16.0523 3 15.5V4C3 3.44772 3.44772 3 4 3H15.5C16.0523 3 16.5 3.44772 16.5 4V8.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M3 6.375H16.5' stroke='none' strokeWidth={1.5} />
          <circle cx='4.6875' cy='4.6875' r='0.5625' fill='none' className={filledClassName} />
          <circle cx='6.375' cy='4.6875' r='0.5625' fill='none' className={filledClassName} />
          <circle cx='8.0625' cy='4.6875' r='0.5625' fill='none' className={filledClassName} />
          <path d='M5.25 8.625H10.875' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M6.375 10.875H11.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M6.375 13.125H9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M18.5459 17.5435C19.5393 16.8296 20.1818 15.6931 20.1818 14.413C20.1818 12.2519 18.3503 10.5 16.0909 10.5C13.8316 10.5 12 12.2519 12 14.413C12 16.5742 13.8316 18.3261 16.0909 18.3261C17.012 18.3261 17.8621 18.0349 18.5459 17.5435ZM18.5459 17.5435L21 20.6739' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <path d='M13 21.9995H5C4.44772 21.9995 4 21.5518 4 20.9995V4.99951C4 4.44723 4.44772 3.99951 5 3.99951H21C21.5523 3.99951 22 4.44723 22 4.99951V10.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M4 8.49951H22' stroke='none' strokeWidth={1.5} />
          <circle cx='6.25' cy='6.24951' r='0.75' fill='none' className={filledClassName} />
          <circle cx='8.5' cy='6.24951' r='0.75' fill='none' className={filledClassName} />
          <circle cx='10.75' cy='6.24951' r='0.75' fill='none' className={filledClassName} />
          <path d='M7 11.4995H14.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M8.5 14.4995H15' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M8.5 17.4995H13' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M24.7278 23.3908C26.0524 22.4389 26.9091 20.9236 26.9091 19.2169C26.9091 16.3354 24.467 13.9995 21.4545 13.9995C18.4421 13.9995 16 16.3354 16 19.2169C16 22.0984 18.4421 24.4343 21.4545 24.4343C22.6827 24.4343 23.8161 24.046 24.7278 23.3908ZM24.7278 23.3908L28 27.5647' stroke='none' strokeWidth={1.5} strokeLinecap='round' />

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
          <path d='M16.25 27.5H6C5.44772 27.5 5 27.0523 5 26.5V6C5 5.44772 5.44772 5 6 5H26.5C27.0523 5 27.5 5.44772 27.5 6V13.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M5 10.625H27.5' stroke='none' strokeWidth={2} />
          <circle cx='7.8125' cy='7.8125' r='0.9375' fill='none' className={filledClassName} />
          <circle cx='10.625' cy='7.8125' r='0.9375' fill='none' className={filledClassName} />
          <circle cx='13.4375' cy='7.8125' r='0.9375' fill='none' className={filledClassName} />
          <path d='M8.75 14.375H18.125' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M10.625 18.125H18.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M10.625 21.875H16.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M30.9098 29.2391C32.5654 28.0493 33.6364 26.1551 33.6364 24.0217C33.6364 20.4199 30.5838 17.5 26.8182 17.5C23.0526 17.5 20 20.4199 20 24.0217C20 27.6236 23.0526 30.5435 26.8182 30.5435C28.3534 30.5435 29.7701 30.0581 30.9098 29.2391ZM30.9098 29.2391L35 34.4565' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CodeTestingIcon
