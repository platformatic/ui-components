import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const FailureRateIcon = ({
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
  const filledClassName = styles[`filled-${color}`]

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
          <path d='M9.5 7L7 2L2 12H6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7 5.18188V8.3637' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='6.99991' cy='10.1818' r='0.909091' fill='none' className={filledClassName} />
          <circle cx='11' cy='11' r='3' stroke='none' />
          <path d='M9.91191 11.9777L11.6543 10.0223H12.0881L10.3457 11.9777H9.91191ZM10.1343 11.0782C10.0103 11.0782 9.90097 11.0568 9.8062 11.014C9.71142 10.9693 9.63609 10.9069 9.58019 10.8268C9.52673 10.7449 9.5 10.649 9.5 10.5391C9.5 10.4292 9.52673 10.3343 9.58019 10.2542C9.63609 10.1741 9.71142 10.1117 9.8062 10.067C9.90097 10.0223 10.0103 10 10.1343 10C10.2582 10 10.3676 10.0223 10.4623 10.067C10.5571 10.1117 10.6312 10.1741 10.6847 10.2542C10.7382 10.3343 10.7649 10.4292 10.7649 10.5391C10.7649 10.649 10.7382 10.7449 10.6847 10.8268C10.6312 10.9069 10.5571 10.9693 10.4623 11.014C10.3676 11.0568 10.2582 11.0782 10.1343 11.0782ZM10.1343 10.8492C10.2145 10.8492 10.2789 10.824 10.3275 10.7737C10.3761 10.7216 10.4004 10.6434 10.4004 10.5391C10.4004 10.4348 10.3761 10.3575 10.3275 10.3073C10.2789 10.2551 10.2145 10.2291 10.1343 10.2291C10.0565 10.2291 9.9921 10.2551 9.94107 10.3073C9.89247 10.3575 9.86817 10.4348 9.86817 10.5391C9.86817 10.6415 9.89247 10.7188 9.94107 10.7709C9.9921 10.8231 10.0565 10.8492 10.1343 10.8492ZM11.8657 12C11.7442 12 11.6349 11.9786 11.5377 11.9358C11.4429 11.8911 11.3688 11.8287 11.3153 11.7486C11.2618 11.6667 11.2351 11.5708 11.2351 11.4609C11.2351 11.351 11.2618 11.2561 11.3153 11.176C11.3688 11.0959 11.4429 11.0335 11.5377 10.9888C11.6349 10.9441 11.7442 10.9218 11.8657 10.9218C11.9921 10.9218 12.1027 10.9441 12.1974 10.9888C12.2922 11.0335 12.3663 11.0959 12.4198 11.176C12.4733 11.2561 12.5 11.351 12.5 11.4609C12.5 11.5708 12.4733 11.6667 12.4198 11.7486C12.3663 11.8287 12.2922 11.8911 12.1974 11.9358C12.1027 11.9786 11.9921 12 11.8657 12ZM11.8657 11.7709C11.9459 11.7709 12.0103 11.7458 12.0589 11.6955C12.1075 11.6434 12.1318 11.5652 12.1318 11.4609C12.1318 11.3585 12.1075 11.2812 12.0589 11.2291C12.0103 11.1769 11.9459 11.1508 11.8657 11.1508C11.788 11.1508 11.7236 11.1769 11.6725 11.2291C11.6239 11.2793 11.5996 11.3566 11.5996 11.4609C11.5996 11.5652 11.6239 11.6434 11.6725 11.6955C11.7236 11.7458 11.788 11.7709 11.8657 11.7709Z' fill='none' className={filledClassName} />

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
          <path d='M14.25 10.5L10.5 3L3 18H9' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5 7.77271V12.5454' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='10.5001' cy='15.2728' r='1.36364' fill='none' className={filledClassName} />
          <circle cx='16.5' cy='16.5' r='4.5' stroke='none' strokeWidth={1.5} />
          <path d='M14.8679 17.9665L17.4815 15.0335H18.1321L15.5185 17.9665H14.8679ZM15.2014 16.6173C15.0155 16.6173 14.8515 16.5852 14.7093 16.5209C14.5671 16.4539 14.4541 16.3603 14.3703 16.2402C14.2901 16.1173 14.25 15.9735 14.25 15.8087C14.25 15.6439 14.2901 15.5014 14.3703 15.3813C14.4541 15.2612 14.5671 15.1676 14.7093 15.1006C14.8515 15.0335 15.0155 15 15.2014 15C15.3873 15 15.5513 15.0335 15.6935 15.1006C15.8357 15.1676 15.9468 15.2612 16.027 15.3813C16.1072 15.5014 16.1473 15.6439 16.1473 15.8087C16.1473 15.9735 16.1072 16.1173 16.027 16.2402C15.9468 16.3603 15.8357 16.4539 15.6935 16.5209C15.5513 16.5852 15.3873 16.6173 15.2014 16.6173ZM15.2014 16.2737C15.3217 16.2737 15.4183 16.236 15.4912 16.1606C15.5641 16.0824 15.6005 15.9651 15.6005 15.8087C15.6005 15.6522 15.5641 15.5363 15.4912 15.4609C15.4183 15.3827 15.3217 15.3436 15.2014 15.3436C15.0848 15.3436 14.9882 15.3827 14.9116 15.4609C14.8387 15.5363 14.8022 15.6522 14.8022 15.8087C14.8022 15.9623 14.8387 16.0782 14.9116 16.1564C14.9882 16.2346 15.0848 16.2737 15.2014 16.2737ZM17.7986 18C17.6163 18 17.4523 17.9679 17.3065 17.9036C17.1643 17.8366 17.0532 17.743 16.973 17.6229C16.8928 17.5 16.8527 17.3561 16.8527 17.1913C16.8527 17.0265 16.8928 16.8841 16.973 16.764C17.0532 16.6439 17.1643 16.5503 17.3065 16.4832C17.4523 16.4162 17.6163 16.3827 17.7986 16.3827C17.9882 16.3827 18.154 16.4162 18.2962 16.4832C18.4383 16.5503 18.5495 16.6439 18.6297 16.764C18.7099 16.8841 18.75 17.0265 18.75 17.1913C18.75 17.3561 18.7099 17.5 18.6297 17.6229C18.5495 17.743 18.4383 17.8366 18.2962 17.9036C18.154 17.9679 17.9882 18 17.7986 18ZM17.7986 17.6564C17.9189 17.6564 18.0155 17.6187 18.0884 17.5433C18.1613 17.4651 18.1978 17.3478 18.1978 17.1913C18.1978 17.0377 18.1613 16.9218 18.0884 16.8436C18.0155 16.7654 17.9189 16.7263 17.7986 16.7263C17.682 16.7263 17.5854 16.7654 17.5088 16.8436C17.4359 16.919 17.3995 17.0349 17.3995 17.1913C17.3995 17.3478 17.4359 17.4651 17.5088 17.5433C17.5854 17.6187 17.682 17.6564 17.7986 17.6564Z' fill='none' className={filledClassName} />
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
          <path d='M23.75 17.5L17.5 5L5 30H15' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.5 12.9546V20.9091' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='17.5' cy='25.4546' r='2.27273' fill='none' className={filledClassName} />
          <circle cx='27.5' cy='27.5' r='7.5' stroke='none' strokeWidth={2} />
          <path d='M24.7798 29.9441L29.1358 25.0559H30.2202L25.8642 29.9441H24.7798ZM25.3357 27.6955C25.0258 27.6955 24.7524 27.642 24.5155 27.5349C24.2786 27.4232 24.0902 27.2672 23.9505 27.067C23.8168 26.8622 23.75 26.6224 23.75 26.3478C23.75 26.0731 23.8168 25.8357 23.9505 25.6355C24.0902 25.4353 24.2786 25.2793 24.5155 25.1676C24.7524 25.0559 25.0258 25 25.3357 25C25.6455 25 25.9189 25.0559 26.1558 25.1676C26.3928 25.2793 26.5781 25.4353 26.7117 25.6355C26.8454 25.8357 26.9122 26.0731 26.9122 26.3478C26.9122 26.6224 26.8454 26.8622 26.7117 27.067C26.5781 27.2672 26.3928 27.4232 26.1558 27.5349C25.9189 27.642 25.6455 27.6955 25.3357 27.6955ZM25.3357 27.1229C25.5361 27.1229 25.6971 27.0601 25.8187 26.9344C25.9402 26.804 26.0009 26.6085 26.0009 26.3478C26.0009 26.0871 25.9402 25.8939 25.8187 25.7682C25.6971 25.6378 25.5361 25.5726 25.3357 25.5726C25.1413 25.5726 24.9803 25.6378 24.8527 25.7682C24.7312 25.8939 24.6704 26.0871 24.6704 26.3478C24.6704 26.6038 24.7312 26.797 24.8527 26.9274C24.9803 27.0577 25.1413 27.1229 25.3357 27.1229ZM29.6643 30C29.3606 30 29.0872 29.9465 28.8442 29.8394C28.6072 29.7277 28.4219 29.5717 28.2883 29.3715C28.1546 29.1667 28.0878 28.9269 28.0878 28.6522C28.0878 28.3776 28.1546 28.1401 28.2883 27.9399C28.4219 27.7398 28.6072 27.5838 28.8442 27.4721C29.0872 27.3603 29.3606 27.3045 29.6643 27.3045C29.9803 27.3045 30.2567 27.3603 30.4936 27.4721C30.7306 27.5838 30.9159 27.7398 31.0495 27.9399C31.1832 28.1401 31.25 28.3776 31.25 28.6522C31.25 28.9269 31.1832 29.1667 31.0495 29.3715C30.9159 29.5717 30.7306 29.7277 30.4936 29.8394C30.2567 29.9465 29.9803 30 29.6643 30ZM29.6643 29.4274C29.8648 29.4274 30.0258 29.3645 30.1473 29.2388C30.2688 29.1085 30.3296 28.9129 30.3296 28.6522C30.3296 28.3962 30.2688 28.203 30.1473 28.0726C30.0258 27.9423 29.8648 27.8771 29.6643 27.8771C29.4699 27.8771 29.3089 27.9423 29.1813 28.0726C29.0598 28.1983 28.9991 28.3915 28.9991 28.6522C28.9991 28.9129 29.0598 29.1085 29.1813 29.2388C29.3089 29.3645 29.4699 29.4274 29.6643 29.4274Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

FailureRateIcon.propTypes = {
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

export default FailureRateIcon
