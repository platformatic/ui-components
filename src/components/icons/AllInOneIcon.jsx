import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AllInOneIcon = ({ color, size }) => {
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
          <circle cx={8} cy={8} r={2} stroke='none' />
          <circle cx={13} cy={3} r={1} stroke='none' />
          <circle cx={4} cy={4} r={1} stroke='none' />
          <circle cx={8} cy={3} r={1} stroke='none' />
          <circle cx={8} cy={13} r={1} transform='rotate(-180 8 13)' stroke='none' />
          <circle cx={12} cy={12} r={1} stroke='none' />
          <path d='M12 11V10C12 9.44772 11.5523 9 11 9H9.5' stroke='none' strokeLinejoin='round' />
          <circle cx={3} cy={13} r={1} stroke='none' />
          <path d='M3 12V10.5C3 9.94772 3.44772 9.5 4 9.5H6.5' stroke='none' strokeLinejoin='round' />
          <path d='M4 5C4 5.53386 4 6.35273 4 7.00014C4 7.55243 4.44772 8 5 8H6' stroke='none' strokeLinejoin='round' />
          <path d='M8 4V6' stroke='none' strokeLinejoin='round' />
          <path d='M13 4V6C13 6.55228 12.5523 7 12 7H9.5' stroke='none' strokeLinejoin='round' />
          <path d='M8 12L8 10' stroke='none' strokeLinejoin='round' />
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
          <circle cx={12} cy={12} r={3} stroke='none' strokeWidth={1.5} />
          <circle cx={19.5} cy={4.5} r={1.5} stroke='none' strokeWidth={1.5} />
          <circle cx={6} cy={6} r={1.5} stroke='none' strokeWidth={1.5} />
          <circle cx={12} cy={4.5} r={1.5} stroke='none' strokeWidth={1.5} />
          <circle cx={12} cy={19.5} r={1.5} transform='rotate(-180 12 19.5)' stroke='none' strokeWidth={1.5} />
          <circle cx={18} cy={18} r={1.5} stroke='none' strokeWidth={1.5} />
          <path d='M18 16.5V14.5C18 13.9477 17.5523 13.5 17 13.5H14.25' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <circle cx={4.5} cy={19.5} r={1.5} stroke='none' strokeWidth={1.5} />
          <path d='M4.5 18V15.25C4.5 14.6977 4.94772 14.25 5.5 14.25H9.75' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M6 7.5C6 8.44649 6 9.99022 6 11.0006C6 11.5529 6.44772 12 7 12H9' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12 6V9' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M19.5 6V9.5C19.5 10.0523 19.0523 10.5 18.5 10.5H14.25' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12 18L12 15' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <circle cx={20} cy={20} r={5} stroke='none' strokeWidth={2} />
          <circle cx={32.5} cy={7.5} r={2.5} stroke='none' strokeWidth={2} />
          <circle cx={10} cy={10} r={2.5} stroke='none' strokeWidth={2} />
          <circle cx={20} cy={7.5} r={2.5} stroke='none' strokeWidth={2} />
          <circle cx={20} cy={32.5} r={2.5} transform='rotate(-180 20 32.5)' stroke='none' strokeWidth={2} />
          <circle cx={30} cy={30} r={2.5} stroke='none' strokeWidth={2} />
          <path d='M30 27.5V23.5C30 22.9477 29.5523 22.5 29 22.5H23.75' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <circle cx='7.5' cy='32.5' r={2.5} stroke='none' strokeWidth={2} />
          <path d='M7.5 30V24.75C7.5 24.1977 7.94772 23.75 8.5 23.75H16.25' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M10 12.5C10 14.3046 10 17.4118 10 19.0008C10 19.5531 10.4477 20 11 20H15' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M20 10V15' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M32.5 10V16.5C32.5 17.0523 32.0523 17.5 31.5 17.5H23.75' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M20 30L20 25' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AllInOneIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

AllInOneIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default AllInOneIcon
