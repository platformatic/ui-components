import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const APIDocsIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M10 7.5V3C10 2.44772 9.55228 2 9 2H3C2.44772 2 2 2.44772 2 3V11C2 11.5523 2.44772 12 3 12H4' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='5.6001' y='9' width='8.4' height='5' rx='1' stroke='none' />
          <path d='M3.5 3.5H8.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.5 5.5H8.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.5 7.5H8.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.40274 12.9999H6.74365L7.74791 10.0908H8.54053L9.54337 12.9999H8.88428L8.15558 10.7556H8.13286L7.40274 12.9999ZM7.36155 11.8564H8.91837V12.3366H7.36155V11.8564Z' fill='none' className={filledClassName} />
          <path d='M9.89351 12.9999V10.0908H11.0412C11.2619 10.0908 11.4499 10.133 11.6052 10.2172C11.7605 10.3006 11.8788 10.4166 11.9603 10.5653C12.0427 10.713 12.0839 10.8834 12.0839 11.0766C12.0839 11.2698 12.0422 11.4403 11.9589 11.588C11.8755 11.7357 11.7548 11.8508 11.5966 11.9331C11.4394 12.0155 11.2491 12.0567 11.0256 12.0567H10.2941V11.5638H10.9262C11.0446 11.5638 11.1421 11.5435 11.2188 11.5028C11.2964 11.4611 11.3542 11.4038 11.3921 11.3309C11.4309 11.257 11.4503 11.1723 11.4503 11.0766C11.4503 10.98 11.4309 10.8957 11.3921 10.8238C11.3542 10.7509 11.2964 10.6945 11.2188 10.6547C11.1411 10.614 11.0427 10.5937 10.9233 10.5937H10.5086V12.9999H9.89351Z' fill='none' className={filledClassName} />
          <path d='M13.0984 10.0908V12.9999H12.4834V10.0908H13.0984Z' fill='none' className={filledClassName} />
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
          <path d='M15 11.25V4C15 3.44772 14.5523 3 14 3H4C3.44772 3 3 3.44772 3 4V17C3 17.5523 3.44772 18 4 18H6' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='8.40015' y='13.5' width='12.6' height='7.5' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M5.25 5.25H12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.25 8.25H12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.25 11.25H12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.1041 19.4999H10.1155L11.6219 15.1362H12.8108L14.3151 19.4999H13.3264L12.2334 16.1334H12.1993L11.1041 19.4999ZM11.0423 17.7847H13.3776V18.5048H11.0423V17.7847Z' fill='none' className={filledClassName} />
          <path d='M14.8403 19.4999V15.1362H16.5619C16.8928 15.1362 17.1748 15.1994 17.4077 15.3259C17.6407 15.4509 17.8182 15.6249 17.9404 15.8479C18.064 16.0695 18.1258 16.3252 18.1258 16.6149C18.1258 16.9047 18.0633 17.1604 17.9383 17.382C17.8133 17.6036 17.6322 17.7761 17.395 17.8997C17.1592 18.0233 16.8736 18.0851 16.5384 18.0851H15.4411V17.3457H16.3893C16.5668 17.3457 16.7131 17.3152 16.8282 17.2541C16.9447 17.1916 17.0313 17.1057 17.0881 16.9963C17.1464 16.8855 17.1755 16.7584 17.1755 16.6149C17.1755 16.47 17.1464 16.3436 17.0881 16.2357C17.0313 16.1263 16.9447 16.0418 16.8282 15.9821C16.7117 15.921 16.564 15.8905 16.385 15.8905H15.7629V19.4999H14.8403Z' fill='none' className={filledClassName} />
          <path d='M19.6476 15.1362V19.4999H18.725V15.1362H19.6476Z' fill='none' className={filledClassName} />

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
          <path d='M25 18.75V6C25 5.44772 24.5523 5 24 5H6C5.44772 5 5 5.44772 5 6V29C5 29.5523 5.44772 30 6 30H10' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='14.0002' y='22.5' width='21' height='12.5' rx='1' stroke='none' strokeWidth={2} />
          <path d='M8.75 8.75H21.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.75 13.75H21.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.75 18.75H21.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18.5069 32.4998H16.8591L19.3698 25.2271H21.3513L23.8584 32.4998H22.2107L20.389 26.889H20.3321L18.5069 32.4998ZM18.4039 29.6411H22.2959V30.8414H18.4039V29.6411Z' fill='none' className={filledClassName} />
          <path d='M24.7338 32.4998V25.2271H27.6031C28.1547 25.2271 28.6246 25.3324 29.0129 25.5431C29.4012 25.7514 29.6971 26.0414 29.9007 26.4131C30.1066 26.7824 30.2096 27.2086 30.2096 27.6915C30.2096 28.1745 30.1055 28.6006 29.8971 28.9699C29.6888 29.3393 29.3869 29.6269 28.9916 29.8329C28.5986 30.0388 28.1227 30.1418 27.564 30.1418H25.7352V28.9096H27.3155C27.6114 28.9096 27.8552 28.8587 28.047 28.7569C28.2411 28.6527 28.3855 28.5095 28.4802 28.3272C28.5773 28.1425 28.6258 27.9306 28.6258 27.6915C28.6258 27.4501 28.5773 27.2394 28.4802 27.0594C28.3855 26.8771 28.2411 26.7363 28.047 26.6369C27.8529 26.5351 27.6066 26.4842 27.3083 26.4842H26.2714V32.4998H24.7338Z' fill='none' className={filledClassName} />
          <path d='M32.746 25.2271V32.4998H31.2084V25.2271H32.746Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

APIDocsIcon.propTypes = {
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
APIDocsIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default APIDocsIcon
