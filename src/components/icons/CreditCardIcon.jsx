import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CreditCardIcon = ({ color, size }) => {
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
          <rect x={2} y={4} width={12} height={8} rx={1} stroke='none' />
          <path d='M2 6H14' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x={9} y={8} width={3} height={2} rx='0.5' stroke='none' />

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
          <rect x={3} y={6} width={18} height={12} rx={1} stroke='none' strokeWidth={1.5} />
          <path d='M3 9H21' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={14} y={12} width={4.5} height={3} rx={0.5} stroke='none' strokeWidth={1.5} />

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
          <rect x={5} y={10} width={30} height={20} rx={1} stroke='none' strokeWidth={2} />
          <path d='M5 15H35' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={24} y={20} width={7.5} height={5} rx={0.5} stroke='none' strokeWidth={2} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CreditCardIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CreditCardIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default CreditCardIcon
