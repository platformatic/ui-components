import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const EditIcon = ({
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
          <rect x={10.0554} y={4.50604} width={2.11765} height={7.76471} transform='rotate(45 10.0554 4.50604)' stroke='none' strokeLinejoin='round' />
          <path d='M6.06234 11.4939L4.56494 9.99652L3.81624 12.2426L6.06234 11.4939Z' stroke='none' strokeLinejoin='round' />
          <path d='M10.8456 3.71577C11.2362 3.32525 11.8693 3.32525 12.2598 3.71577L12.343 3.79896C12.7336 4.18949 12.7336 4.82265 12.343 5.21318L11.5527 6.00347L10.0553 4.50607L10.8456 3.71577Z' stroke='none' />
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
          <rect x={15.083} y={6.75909} width={3.17647} height={11.6471} transform='rotate(45 15.083 6.75909)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M9.09327 17.2409L6.84717 14.9948L5.72412 18.364L9.09327 17.2409Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M16.622 5.22011C17.0125 4.82958 17.6457 4.82958 18.0362 5.22011L18.8681 6.052C19.2586 6.44252 19.2586 7.07569 18.8681 7.46621L17.3291 9.00521L15.083 6.7591L16.622 5.22011Z' stroke='none' strokeWidth={1.5} />
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
          <rect x={25.1384} y={11.2652} width={5.29412} height={19.4118} transform='rotate(45 25.1384 11.2652)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M15.1556 28.7348L11.4121 24.9913L9.54036 30.6066L15.1556 28.7348Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M28.1747 8.22877C28.5653 7.83825 29.1984 7.83825 29.5889 8.22877L31.9182 10.5581C32.3088 10.9486 32.3088 11.5818 31.9182 11.9723L28.8818 15.0087L25.1383 11.2652L28.1747 8.22877Z' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

EditIcon.propTypes = {
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
  disabled: PropTypes.bool,
  /**
   * inactive
   */
  inactive: PropTypes.bool
}

export default EditIcon
