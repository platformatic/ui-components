import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const BillingIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  const filledClassName = styles[`filled-${color}`]

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
          <path d='M12 5V3C12 2.44772 11.5523 2 11 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H6' stroke='none' strokeLinecap='round' />
          <path d='M4 4H9.55556' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4 6H6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4 8H5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.8332 9.07407C10.8332 9.35021 11.057 9.57407 11.3332 9.57407C11.6093 9.57407 11.8332 9.35021 11.8332 9.07407H10.8332ZM9.99984 9.49999C9.72081 9.49999 9.48985 9.42063 9.34223 9.31811C9.19275 9.21431 9.1665 9.12 9.1665 9.07407H8.1665C8.1665 9.5395 8.43873 9.90816 8.77183 10.1395C9.10678 10.3721 9.54249 10.5 9.99984 10.5V9.49999ZM9.1665 9.07407C9.1665 9.02813 9.19275 8.93382 9.34223 8.83002C9.48985 8.72751 9.72081 8.64814 9.99984 8.64814V7.64814C9.54249 7.64814 9.10678 7.77605 8.77183 8.00865C8.43873 8.23997 8.1665 8.60863 8.1665 9.07407H9.1665ZM9.99984 8.64814C10.2789 8.64814 10.5098 8.72751 10.6574 8.83002C10.8069 8.93382 10.8332 9.02813 10.8332 9.07407H11.8332C11.8332 8.60863 11.5609 8.23997 11.2278 8.00865C10.8929 7.77605 10.4572 7.64814 9.99984 7.64814V8.64814Z' fill='none' className={filledClassName} />
          <path d='M8.66683 10.9259C8.66683 11.4373 9.26378 11.8519 10.0002 11.8519C10.7365 11.8519 11.3335 11.4373 11.3335 10.9259C11.3335 10.4146 10.7365 10 10.0002 10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 7.77778V12.2222' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={10} cy={10} r={4} stroke='none' />
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
          <path d='M18 7.5V4C18 3.44772 17.5523 3 17 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H9' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M6 6H14.3333' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 9H9' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 12H7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.2498 13.6111C16.2498 14.0253 16.5855 14.3611 16.9998 14.3611C17.414 14.3611 17.7498 14.0253 17.7498 13.6111H16.2498ZM14.9998 14.25C14.5812 14.25 14.2348 14.1309 14.0133 13.9772C13.7891 13.8215 13.7498 13.68 13.7498 13.6111H12.2498C12.2498 14.3093 12.6581 14.8622 13.1577 15.2092C13.6602 15.5581 14.3137 15.75 14.9998 15.75V14.25ZM13.7498 13.6111C13.7498 13.5422 13.7891 13.4007 14.0133 13.245C14.2348 13.0913 14.5812 12.9722 14.9998 12.9722V11.4722C14.3137 11.4722 13.6602 11.6641 13.1577 12.013C12.6581 12.36 12.2498 12.9129 12.2498 13.6111H13.7498ZM14.9998 12.9722C15.4183 12.9722 15.7647 13.0913 15.9862 13.245C16.2104 13.4007 16.2498 13.5422 16.2498 13.6111H17.7498C17.7498 12.9129 17.3414 12.36 16.8418 12.013C16.3393 11.6641 15.6858 11.4722 14.9998 11.4722V12.9722Z' fill='none' className={filledClassName} />
          <path d='M13.0002 16.3889C13.0002 17.156 13.8957 17.7778 15.0002 17.7778C16.1048 17.7778 17.0002 17.156 17.0002 16.3889C17.0002 15.6219 16.1048 15 15.0002 15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 11.6667V18.3333' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={15} cy={15} r={6} stroke='none' strokeWidth={1.5} />
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
          <path d='M30 12.5V6C30 5.44772 29.5523 5 29 5H6C5.44772 5 5 5.44772 5 6V34C5 34.5523 5.44772 35 6 35H15' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M10 10H23.8889' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 15H15' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 20H12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.3332 22.6852C27.3332 23.2375 27.7809 23.6852 28.3332 23.6852C28.8855 23.6852 29.3332 23.2375 29.3332 22.6852H27.3332ZM24.9998 24C24.2577 24 23.6291 23.7894 23.2132 23.5006C22.7936 23.2092 22.6665 22.9049 22.6665 22.6852H20.6665C20.6665 23.7439 21.2856 24.5969 22.0724 25.1434C22.863 25.6923 23.901 26 24.9998 26V24ZM22.6665 22.6852C22.6665 22.4655 22.7936 22.1611 23.2132 21.8697C23.6291 21.5809 24.2577 21.3704 24.9998 21.3704V19.3704C23.901 19.3704 22.863 19.678 22.0724 20.227C21.2856 20.7734 20.6665 21.6264 20.6665 22.6852H22.6665ZM24.9998 21.3704C25.742 21.3704 26.3706 21.5809 26.7865 21.8697C27.2061 22.1611 27.3332 22.4655 27.3332 22.6852H29.3332C29.3332 21.6264 28.7141 20.7734 27.9273 20.227C27.1367 19.678 26.0986 19.3704 24.9998 19.3704V21.3704Z' fill='none' className={filledClassName} />
          <path d='M21.6671 27.3149C21.6671 28.5933 23.1595 29.6297 25.0004 29.6297C26.8414 29.6297 28.3337 28.5933 28.3337 27.3149C28.3337 26.0364 26.8414 25.0001 25.0004 25.0001' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 19.4445V30.5556' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={25} cy={25} r={10} stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

BillingIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

BillingIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default BillingIcon
