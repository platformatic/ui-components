import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AppIcon = ({ color, size, disabled }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
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
          <path d='M6 2.95996H3C2.44772 2.95996 2 3.40768 2 3.95996V9.63996C2 10.1922 2.44772 10.64 3 10.64H13C13.5523 10.64 14 10.1922 14 9.63996V3.95996C14 3.40768 13.5523 2.95996 13 2.95996H10' stroke='none' strokeLinecap='round' />
          <rect x={6} y={10.64} width={4} height={1.92} stroke='none' />
          <path d='M4 13.5601C4 13.0078 4.44772 12.5601 5 12.5601H11C11.5523 12.5601 12 13.0078 12 13.5601V14.0001H4V13.5601Z' stroke='none' />
          <path d='M8 2L8.89806 4.65337H11.8042L9.45308 6.29325L10.3511 8.94662L8 7.30675L5.64886 8.94662L6.54692 6.29325L4.19577 4.65337H7.10194L8 2Z' stroke='none' strokeLinejoin='round' />

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
          <path d='M9 4.43994H4C3.44772 4.43994 3 4.88766 3 5.43994V14.9599C3 15.5122 3.44772 15.9599 4 15.9599H20C20.5523 15.9599 21 15.5122 21 14.9599V5.43994C21 4.88766 20.5523 4.43994 20 4.43994H15' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x={9} y={15.96} width={6} height={2.88} stroke='none' strokeWidth={1.5} />
          <path d='M6 19.84C6 19.2877 6.44772 18.84 7 18.84H17C17.5523 18.84 18 19.2877 18 19.84V21H6V19.84Z' stroke='none' strokeWidth={1.5} />
          <path d='M12 3L13.3471 6.98006H17.7063L14.1796 9.43988L15.5267 13.4199L12 10.9601L8.47329 13.4199L9.82037 9.43988L6.29366 6.98006H10.6529L12 3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M15 7.40002H6C5.44772 7.40002 5 7.84774 5 8.40002V25.6C5 26.1523 5.44772 26.6 6 26.6H34C34.5523 26.6 35 26.1523 35 25.6V8.40002C35 7.84774 34.5523 7.40002 34 7.40002H25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x={15} y={26.6} width={10} height={4.8} stroke='none' strokeWidth={2} />
          <path d='M10 32.4C10 31.8477 10.4477 31.4 11 31.4H29C29.5523 31.4 30 31.8477 30 32.4V35H10V32.4Z' stroke='none' strokeWidth={2} />
          <path d='M20 5L22.2451 11.6334H29.5106L23.6327 15.7331L25.8779 22.3666L20 18.2669L14.1221 22.3666L16.3673 15.7331L10.4894 11.6334H17.7549L20 5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AppIcon.propTypes = {
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
AppIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default AppIcon
