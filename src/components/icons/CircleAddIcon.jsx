import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const CircleAddIcon = ({ color, size }) => {
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
          <circle cx={8} cy={8} r={6} stroke='none' />
          <line x1={8} y1={5} x2={8} y2={11} stroke='none' strokeLinecap='round' />
          <line x1={5} y1={8} x2={11} y2={8} stroke='none' strokeLinecap='round' />
        </svg>
      )
      break
    case 'normal':
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={12} cy={12} r={9} stroke='none' strokeWidth={1.5} />
          <line x1={12} y1={7.5} x2={12} y2={16.5} stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <line x1={7.5} y1={12} x2={16.5} y2={12} stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <circle cx={20} cy={20} r={15} stroke='none' strokeWidth={2} />
          <line x1={19.75} y1={12.25} x2={19.75} y2={27.75} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <line x1={12.25} y1={20.25} x2={27.75} y2={20.25} stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleAddIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge'])
}

CircleAddIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'normal'
}

export default CircleAddIcon
