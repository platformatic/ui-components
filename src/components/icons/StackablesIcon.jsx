import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const StackablesIcon = ({ color, size, disabled }) => {
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
          <path d='M11.3834 9.6748L7.67533 11.5744L4 9.71624' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.66943 13.4988V11.8079' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.3834 9.67493V12.0781L7.67533 13.9745L4 12.1195V9.71636' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.3834 7.1676L7.67533 9.06719L4 7.20904' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.66943 10.9916V9.30066' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.3834 7.16772V9.5709L7.67533 11.4673L4 9.61233V7.20916' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.52939 3.79163L11.3834 4.66032L7.67533 6.55991L4 4.70176L5.83767 3.81234' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.66943 8.48436V6.79346' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.3834 4.6604V7.06357L7.67533 8.95997L4 7.105V4.70183' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.8457 2.69214V4.07653' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='7.57619' cy='2.69219' rx='1.73049' ry='0.692194' stroke='none' />
          <path d='M9.30667 4.07654C9.30667 4.45883 8.53191 4.76873 7.57619 4.76873C6.62047 4.76873 5.8457 4.45883 5.8457 4.07654' stroke='none' />
          <path d='M9.30664 2.69214V4.07653' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M17.0752 14.5123L11.513 17.3617L6 14.5745' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.5044 20.2483V17.7119' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.0752 14.5125V18.1172L11.513 20.9618L6 18.1794V14.5746' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.0752 10.7515L11.513 13.6008L6 10.8136' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.5044 16.4874V13.951' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.0752 10.7516V14.3563L11.513 17.2009L6 14.4185V10.8137' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.2941 5.6875L17.0752 6.99055L11.513 9.83993L6 7.0527L8.7565 5.71858' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.5044 12.7265V10.1902' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.0752 6.99072V10.5955L11.513 13.4401L6 10.6576V7.05287' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.76904 4.03833V6.11491' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='11.3648' cy='4.03829' rx='2.59573' ry='1.03829' stroke='none' strokeWidth={1.5} />
          <path d='M13.9605 6.11487C13.9605 6.6883 12.7984 7.15316 11.3648 7.15316C9.93119 7.15316 8.76904 6.6883 8.76904 6.11487' stroke='none' strokeWidth={1.5} />
          <path d='M13.9604 4.03833V6.11491' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M28.4586 24.1871L19.1883 28.9361L10 24.2907' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.1738 33.747V29.5198' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.4586 24.1873V30.1952L19.1883 34.9362L10 30.2988V24.2908' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.4586 17.9188L19.1883 22.6678L10 18.0224' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.1738 27.4787V23.2515' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.4586 17.9189V23.9269L19.1883 28.6679L10 24.0305V18.0225' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M23.8235 9.479L28.4586 11.6508L19.1883 16.3997L10 11.7543L14.5942 9.5308' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.1738 21.2108V16.9835' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.4586 11.651V17.6589L19.1883 22.3999L10 17.7625V11.7546' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.6147 6.73047V10.1914' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='18.941' cy='6.73049' rx='4.32621' ry='1.73049' stroke='none' strokeWidth={2} />
          <path d='M23.2672 10.1914C23.2672 11.1471 21.3303 11.9219 18.941 11.9219C16.5517 11.9219 14.6147 11.1471 14.6147 10.1914' stroke='none' strokeWidth={2} />
          <path d='M23.2671 6.73047V10.1914' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

StackablesIcon.propTypes = {
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
StackablesIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default StackablesIcon
