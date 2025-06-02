import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CacheRecommendationIcon = ({
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
          <path d='M12 4.04007C12 2.91337 9.76142 2 7 2C4.23858 2 2 2.91337 2 4.04007C2 4.83891 3.12531 5.5305 4.76442 5.86536' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 7.16504C2 7.98832 3.1955 8.69774 4.91667 9.0201' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 4.04004V10.145C2 10.9683 3.1955 11.6777 4.91667 12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.1379 7.5C10.3586 8.3 11.7011 9.5 12.3447 10V13.25C12.3447 13.65 11.2413 13.9167 10.6896 14H8.2069C7.10348 14 7.01153 13.3333 7.10348 13C6.91958 12.9167 6.55177 12.7 6.55177 12.5C6.55177 12.3 6.73568 12.0833 6.82763 12C6.55177 12 6.00006 11.9 6.00006 11.5C6.00006 11.1 6.36787 10.8333 6.55177 10.75C6.36787 10.75 6.00006 10.6 6.00006 10C6.00006 9.4 6.55177 9.25 6.82763 9.25H9.03447L8.48276 7.25C8.39081 6.83333 8.37242 6 9.03447 6C9.86203 6 9.86203 6.5 10.1379 7.5Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.3449 9.75H14V13.75H12.3449V9.75Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M18.0002 6.0601C18.0002 4.37006 14.6424 3 10.5002 3C6.35811 3 3.00024 4.37006 3.00024 6.0601C3.00024 7.25836 4.68821 8.29576 7.14688 8.79804' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.00024 10.7471C3.00024 11.982 4.79349 13.0461 7.37524 13.5297' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.00024 6.05957V15.217C3.00024 16.4519 4.79349 17.516 7.37524 17.9996' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.2071 11.25C15.5381 12.45 17.5518 14.25 18.5173 15V19.875C18.5173 20.475 16.8622 20.875 16.0346 21H12.3106C10.6555 21 10.5175 20 10.6555 19.5C10.3796 19.375 9.8279 19.05 9.8279 18.75C9.8279 18.45 10.1038 18.125 10.2417 18C9.8279 18 9.00034 17.85 9.00034 17.25C9.00034 16.65 9.55205 16.25 9.8279 16.125C9.55205 16.125 9.00034 15.9 9.00034 15C9.00034 14.1 9.8279 13.875 10.2417 13.875H13.5519L12.7244 10.875C12.5865 10.25 12.5589 9 13.5519 9C14.7933 9 14.7933 9.75 15.2071 11.25Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18.5175 14.625H21.0002V20.625H18.5175V14.625Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M30.0002 10.1002C30.0002 7.28343 24.4038 5 17.5002 5C10.5967 5 5.00024 7.28343 5.00024 10.1002C5.00024 12.0973 7.81352 13.8263 11.9113 14.6634' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.00024 17.9121C5.00024 19.9703 7.98898 21.7439 12.2919 22.5498' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.00024 10.0996V25.3619C5.00024 27.4201 7.98898 29.1937 12.2919 29.9996' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25.345 18.75C25.8967 20.75 29.2529 23.75 30.8621 25V33.125C30.8621 34.125 28.1035 34.7917 26.7242 35H20.5175C17.7589 35 17.5291 33.3333 17.7589 32.5C17.2992 32.2917 16.3797 31.75 16.3797 31.25C16.3797 30.75 16.8394 30.2083 17.0693 30C16.3797 30 15.0004 29.75 15.0004 28.75C15.0004 27.75 15.9199 27.0833 16.3797 26.875C15.9199 26.875 15.0004 26.5 15.0004 25C15.0004 23.5 16.3797 23.125 17.0693 23.125H22.5864L21.2071 18.125C20.9773 17.0833 20.9313 15 22.5864 15C24.6553 15 24.6553 16.25 25.345 18.75Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30.8624 24.375H35.0002V34.375H30.8624V24.375Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default CacheRecommendationIcon
