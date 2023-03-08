import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const AppEmptyIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'extra-large':
      icon = (
        <svg
          width={81}
          height={80}
          viewBox='0 0 81 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path
            d='M34.8199 45.5671H24.4589C23.9066 45.5671 23.4589 46.0149 23.4589 46.5671V66.3802C23.4589 66.9324 23.9066 67.3802 24.4589 67.3802H56.5418C57.0941 67.3802 57.5418 66.9324 57.5418 66.3802V46.5671C57.5418 46.0149 57.0941 45.5671 56.5418 45.5671H46.1808'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
          />
          <rect
            x={34.8199}
            y={67.3799}
            width={11.3609}
            height={5.45325}
            stroke='none'
            strokeWidth={3}
          />
          <path
            d='M29.1394 73.8333C29.1394 73.281 29.5871 72.8333 30.1394 72.8333H50.8613C51.4136 72.8333 51.8613 73.281 51.8613 73.8333V76.9232H29.1394V73.8333Z'
            stroke='none'
            strokeWidth={3}
          />
          <path
            d='M40.5004 42.8403L43.051 50.3765L51.3053 50.3765L44.6275 55.0342L47.1782 62.5704L40.5004 57.9128L33.8226 62.5704L36.3732 55.0342L29.6954 50.3765L37.9497 50.3765L40.5004 42.8403Z'
            stroke='none'
            strokeWidth={3}
            strokeLinejoin='round'
          />
          <path
            d='M19.1982 57.0413H9.25739V37.1597'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M29.139 39.9999V14.4377'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M61.8018 57.0414H71.7426V45.6804'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M49.0207 41.4201V32.8994H58.9615V17.2781'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            cx={9.25738}
            cy={31.4793}
            r={5.68047}
            stroke='none'
            strokeWidth={3}
          />
          <circle
            cx={29.139}
            cy={8.75738}
            r={5.68047}
            stroke='none'
            strokeWidth={3}
          />
          <circle
            cx={58.9615}
            cy={11.5977}
            r={5.68047}
            stroke='none'
            strokeWidth={3}
          />
          <circle
            cx={71.7426}
            cy={40.0001}
            r={5.68047}
            stroke='none'
            strokeWidth={3}
          />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AppEmptyIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

AppEmptyIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default AppEmptyIcon
