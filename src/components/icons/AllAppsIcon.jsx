import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE, EXTRA_MEDIUM } from '../constants'

const AllAppsIcon = ({
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
          <path d='M2.5 3.32227V5.91083L4.18212 6.91605M7.11442 3.32227V3.91718' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.80721 4.51891L2.5 3.25946L4.80721 2L7.11442 3.25946L4.80721 4.51891ZM4.80721 4.51891V5.35508' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.5002 3.32227V5.91083L11.8181 6.91605M8.88582 3.32227V3.91718' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.223 4.51891V5.35508M13.5 3.25946L11.1928 4.51891L8.88558 3.25946L11.1928 2L13.5 3.25946Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.88574 12.0653V12.621L11.193 13.9998M11.193 13.9998L13.5002 12.621V10.0325M11.193 13.9998V11.3549' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.9246 9.10938L13.5005 9.96963L11.1933 11.2291L10.7104 10.9655' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.1145 12.0653V12.621L4.80729 13.9998M4.80729 13.9998L2.50008 12.621V10.0325M4.80729 13.9998V11.3549' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.07591 9.10938L2.5 9.96963L4.80721 11.2291L5.29004 10.9655' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.97351 11.1067L5.23682 9.48268V6.43359L7.97351 7.99132M7.97351 11.1067L10.7102 9.48268V6.43359L7.97351 7.99132M7.97351 11.1067V7.99132' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.97351 7.84302L5.23682 6.3595L7.97351 4.87598L10.7102 6.3595L7.97351 7.84302Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M3.75 4.9834V8.86624L6.27318 10.3741M10.6716 4.9834V5.87576' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.21082 6.77837L3.75 4.88918L7.21082 3L10.6716 4.88918L7.21082 6.77837ZM7.21082 6.77837V8.03263' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.2502 4.9834V8.86624L17.7271 10.3741M13.3286 4.9834V5.87576' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.8345 6.77837V8.03263M20.25 4.88918L16.7892 6.77837L13.3284 4.88918L16.7892 3L20.25 4.88918Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.3284 18.0979V18.9315L16.7892 20.9997M16.7892 20.9997L20.25 18.9315V15.0487M16.7892 20.9997V17.0324' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.8866 13.6641L20.2505 14.9544L16.7897 16.8436L16.0654 16.4483' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.6719 18.0979V18.9315L7.21106 20.9997M7.21106 20.9997L3.75024 18.9315V15.0487M7.21106 20.9997V17.0324' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.11411 13.6641L3.75025 14.9544L7.21107 16.8436L7.9353 16.4483' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.9603 16.6601L7.85522 14.224V9.65039L11.9603 11.987M11.9603 16.6601L16.0653 14.224V9.65039L11.9603 11.987M11.9603 16.6601V11.987' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.9603 11.7645L7.85522 9.53925L11.9603 7.31396L16.0653 9.53925L11.9603 11.7645Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case EXTRA_MEDIUM:
      icon = (
        <svg
          width={32}
          height={32}
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M8.5 0.999512L12.8301 3.49951V8.49951L8.5 10.9995L4.16987 8.49951V3.49951L8.5 0.999512Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M8.5 20.9995L12.8301 23.4995V28.4995L8.5 30.9995L4.16987 28.4995V23.4995L8.5 20.9995Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M16 10.9995L20.3301 13.4995V18.4995L16 20.9995L11.6699 18.4995V13.4995L16 10.9995Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M1 10.9995L5.33013 13.4995V18.4995L1 20.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30.3296 10.9995L25.9995 13.4995V18.4995L30.3296 20.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M23.5 0.999512L27.8301 3.49951V8.49951L23.5 10.9995L19.1699 8.49951V3.49951L23.5 0.999512Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M23.5 20.9995L27.8301 23.4995V28.4995L23.5 30.9995L19.1699 28.4995V23.4995L23.5 20.9995Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M6.25 8.30566V14.7771L10.4553 17.2901M17.7861 8.30566V9.79294' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.018 11.2973L6.25 8.14864L12.018 5L17.7861 8.14864L12.018 11.2973ZM12.018 11.2973V13.3877' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M33.7505 8.30566V14.7771L29.5452 17.2901M22.2144 8.30566V9.79294' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.0577 11.2973V13.3877M33.7502 8.14864L27.9822 11.2973L22.2142 8.14864L27.9822 5L33.7502 8.14864Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M22.2141 30.1632V31.5526L27.9821 34.9995M27.9821 34.9995L33.7502 31.5526V25.0812M27.9821 34.9995V28.3873' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M29.8112 22.7734L33.751 24.9241L27.9829 28.0727L26.7759 27.4138' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.7864 30.1632V31.5526L12.0183 34.9995M12.0183 34.9995L6.25032 31.5526V25.0812M12.0183 34.9995V28.3873' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.19 22.7734L6.25025 24.9241L12.0183 28.0727L13.2253 27.4138' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.9343 27.7669L13.0925 23.7067V16.084L19.9343 19.9783M19.9343 27.7669L26.776 23.7067V16.084L19.9343 19.9783M19.9343 27.7669V19.9783' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.934 19.6076L13.0923 15.8987L19.934 12.1899L26.7757 15.8987L19.934 19.6076Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AllAppsIcon.propTypes = {
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

export default AllAppsIcon
