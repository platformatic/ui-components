import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const WorkspaceDynamicIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'small':
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={2} y={2} width={4} height={5.03497} rx={1} stroke='none' />
          <path d='M8 2L11 4.5L8 7V2Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x={14} y={14} width={4} height={5.03496} rx={1} transform='rotate(-180 14 14)' stroke='none' />
          <rect x={8} y={14} width={6} height={5.03497} rx={1} transform='rotate(-180 8 14)' stroke='none' />
          <path d='M11 6V7L14 4.5L11 2V3' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    case 'medium':
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={3} y={3} width={6} height={7.55245} rx={1} stroke='none' strokeWidth={1.5} />
          <path d='M12 3L16.5 6.75L12 10.5V3Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={21} y={21} width={6} height={7.55245} rx={1} transform='rotate(-180 21 21)' stroke='none' strokeWidth={1.5} />
          <rect x={12} y={21} width={9} height={7.55245} rx={1} transform='rotate(-180 12 21)' stroke='none' strokeWidth={1.5} />
          <path d='M16.5 9V10.5L21 6.75L16.5 3V4.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    case 'large':
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={5} y={5} width={10} height={12.5874} rx={1} stroke='none' strokeWidth={2} />
          <path d='M20 5L27.5 11.25L20 17.5V5Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={35} y={35} width={10} height={12.5874} rx={1} transform='rotate(-180 35 35)' stroke='none' strokeWidth={2} />
          <rect x={20} y={35} width={15} height={12.5874} rx={1} transform='rotate(-180 20 35)' stroke='none' strokeWidth={2} />
          <path d='M27.5 15V17.5L35 11.25L27.5 5V7.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

WorkspaceDynamicIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

WorkspaceDynamicIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default WorkspaceDynamicIcon
