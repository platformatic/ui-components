import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const LabelIcon = ({ color, size }) => {
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
          <path d='M3.05518 8.18267C3.01573 7.89342 3.10464 7.60137 3.29858 7.38318L8.30775 1.74751C8.67466 1.33472 9.30673 1.29752 9.71952 1.66443L13.4567 4.98613C13.8695 5.35304 13.9067 5.98511 13.5398 6.3979L8.53058 12.0336C8.33665 12.2518 8.05705 12.3743 7.76517 12.3691L4.47301 12.3098C3.97985 12.301 3.56682 11.9339 3.50017 11.4452L3.05518 8.18267Z' stroke='none' />
          <circle cx={6.60545} cy={8.93103} r={1.5} transform='rotate(-48.3682 6.60545 8.93103)' stroke='none' />

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
          <path d='M4.55169 12.0459C4.51224 11.7566 4.60115 11.4646 4.79509 11.2464L12.7938 2.24731C13.1607 1.83452 13.7928 1.79732 14.2056 2.16422L20.5587 7.81112C20.9715 8.17803 21.0087 8.8101 20.6418 9.22289L12.6431 18.222C12.4492 18.4402 12.1696 18.5627 11.8777 18.5575L6.28101 18.4568C5.78786 18.4479 5.37482 18.0808 5.30817 17.5921L4.55169 12.0459Z' stroke='none' stroke-width='1.5' />
          <circle cx={9.90817} cy={13.3963} r={2.25} transform='rotate(-48.3682 9.90817 13.3963)' stroke='none' strokeWidth={1.5} />

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
          <path d='M7.54472 19.7728C7.50526 19.4836 7.59417 19.1916 7.78811 18.9734L21.7659 3.2474C22.1328 2.8346 22.7649 2.7974 23.1777 3.16431L34.7628 13.4616C35.1756 13.8285 35.2128 14.4606 34.8459 14.8734L20.8681 30.5993C20.6742 30.8175 20.3946 30.9401 20.1027 30.9348L9.89701 30.7513C9.40386 30.7424 8.99083 30.3753 8.92417 29.8866L7.54472 19.7728Z' stroke='none' stroke-width='2' />
          <circle cx={16.5136} cy={22.3273} r={3.75} transform='rotate(-48.3682 16.5136 22.3273)' stroke='none' strokeWidth={2} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

LabelIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

LabelIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default LabelIcon
