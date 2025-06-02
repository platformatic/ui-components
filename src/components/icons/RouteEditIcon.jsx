import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RouteEditIcon = ({
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
          <circle cx='3' cy='5' r='1' transform='rotate(90 3 5)' stroke='none' />
          <circle cx='13' cy='3' r='1' transform='rotate(90 13 3)' stroke='none' />
          <circle cx='13' cy='13' r='1' transform='rotate(90 13 13)' stroke='none' />
          <path d='M12 3L10 3L7.5 3C6.94772 3 6.5 3.44772 6.5 4V4C6.5 4.55228 6.05228 5 5.5 5L4 5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 13L9.87502 13M4.5 5L6.25002 5C7.07844 5 7.75002 5.67157 7.75002 6.5L7.75002 7.74998C7.75002 7.88806 7.63808 8 7.5 8V8L7.00001 8C6.17159 8 5.50001 7.32843 5.50001 6.5V6.5C5.50001 5.67157 4.82843 5 4 5V5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='11.5024' y='6.49741' width='2.11765' height='7.76471' transform='rotate(45 11.5024 6.49741)' stroke='none' strokeLinejoin='round' />
          <path d='M7.50961 13.4853L6.01221 11.9879L5.26351 14.234L7.50961 13.4853Z' stroke='none' strokeLinejoin='round' />
          <path d='M12.2929 5.70711C12.6834 5.31658 13.3166 5.31658 13.7071 5.70711L13.7903 5.7903C14.1808 6.18082 14.1808 6.81399 13.7903 7.20451L13 7.99481L11.5026 6.4974L12.2929 5.70711Z' stroke='none' />
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
          <circle cx='4.5' cy='7.5' r='1.5' transform='rotate(90 4.5 7.5)' stroke='none' strokeWidth={1.5} />
          <circle cx='19.5' cy='4.5' r='1.5' transform='rotate(90 19.5 4.5)' stroke='none' strokeWidth={1.5} />
          <circle cx='19.5' cy='19.5' r='1.5' transform='rotate(90 19.5 19.5)' stroke='none' strokeWidth={1.5} />
          <path d='M18 4.5L15 4.5L10.75 4.5C10.1977 4.5 9.75 4.94772 9.75 5.5L9.75 6.5C9.75 7.05228 9.30228 7.5 8.75 7.5L6 7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18 19.5L14.8125 19.5M6.75 7.5L9.62502 7.5C10.7296 7.5 11.625 8.39543 11.625 9.5L11.625 11.625C11.625 11.8321 11.4571 12 11.25 12V12L10.25 12C9.14545 12 8.25002 11.1046 8.25001 10L8.25001 9.49999C8.25001 8.39543 7.35458 7.5 6.25002 7.5L6 7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='17.2539' y='9.74609' width='3.17647' height='11.6471' transform='rotate(45 17.2539 9.74609)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M11.2642 20.2279L9.01807 17.9818L7.89501 21.351L11.2642 20.2279Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M18.7929 8.20711C19.1834 7.81658 19.8166 7.81658 20.2071 8.20711L21.039 9.039C21.4295 9.42952 21.4295 10.0627 21.039 10.4532L19.5 11.9922L17.2539 9.7461L18.7929 8.20711Z' stroke='none' strokeWidth={1.5} />
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
          <circle cx='7.5' cy='12.5' r='2.5' transform='rotate(90 7.5 12.5)' stroke='none' strokeWidth={2} />
          <circle cx='32.5' cy='7.5' r='2.5' transform='rotate(90 32.5 7.5)' stroke='none' strokeWidth={2} />
          <circle cx='32.5' cy='32.5' r='2.5' transform='rotate(90 32.5 32.5)' stroke='none' strokeWidth={2} />
          <path d='M30 7.5L25 7.5L17.25 7.5C16.6977 7.5 16.25 7.94772 16.25 8.5L16.25 11.5C16.25 12.0523 15.8023 12.5 15.25 12.5L10 12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30 32.5L24.6875 32.5M11.25 12.5L17.375 12.5C18.4796 12.5 19.375 13.3954 19.375 14.5L19.375 19.375C19.375 19.7202 19.0952 20 18.75 20V20L15.75 20C14.6455 20 13.75 19.1046 13.75 18L13.75 14.5C13.75 13.3954 12.8546 12.5 11.75 12.5L10 12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='28.7563' y='16.2435' width='5.29412' height='19.4118' transform='rotate(45 28.7563 16.2435)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M18.7738 33.7132L15.0303 29.9697L13.1585 35.585L18.7738 33.7132Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M31.7929 13.2071C32.1834 12.8166 32.8166 12.8166 33.2071 13.2071L35.5364 15.5364C35.9269 15.9269 35.9269 16.5601 35.5364 16.9506L32.5 19.987L28.7565 16.2435L31.7929 13.2071Z' stroke='none' strokeWidth={2} />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default RouteEditIcon
