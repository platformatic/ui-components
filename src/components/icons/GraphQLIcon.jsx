import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const GraphQLIcon = ({ color, size, disabled }) => {
  let className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
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
          <path d='M2.91626 10.593L8.00028 2.80688L13.0835 10.593H2.91626Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.91626 5.42096V10.6484L8.00028 13.2618L13.0835 10.6484V5.42096L8.00028 2.80688L2.91626 5.42096Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.00003 3.61374C8.50041 3.61374 8.90606 3.25249 8.90606 2.80687C8.90606 2.36125 8.50041 2 8.00003 2C7.49964 2 7.09399 2.36125 7.09399 2.80687C7.09399 3.25249 7.49964 3.61374 8.00003 3.61374Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.91677 6.20468C3.41716 6.20468 3.82281 5.84343 3.82281 5.39781C3.82281 4.95219 3.41716 4.59094 2.91677 4.59094C2.41639 4.59094 2.01074 4.95219 2.01074 5.39781C2.01074 5.84343 2.41639 6.20468 2.91677 6.20468Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.0833 6.20468C13.5837 6.20468 13.9893 5.84343 13.9893 5.39781C13.9893 4.95219 13.5837 4.59094 13.0833 4.59094C12.5829 4.59094 12.1772 4.95219 12.1772 5.39781C12.1772 5.84343 12.5829 6.20468 13.0833 6.20468Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.01121 13.9904C8.51157 13.9851 8.91237 13.6196 8.90643 13.174C8.90049 12.7284 8.49006 12.3715 7.98971 12.3768C7.48936 12.3821 7.08855 12.7476 7.09449 13.1932C7.10043 13.6388 7.51086 13.9957 8.01121 13.9904Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.094 11.3995C13.5943 11.3942 13.9951 11.0287 13.9892 10.5831C13.9833 10.1375 13.5728 9.78055 13.0725 9.78583C12.5721 9.79112 12.1713 10.1566 12.1773 10.6022C12.1832 11.0478 12.5936 11.4047 13.094 11.3995Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.92747 11.3999C3.42783 11.3947 3.82863 11.0291 3.82269 10.5836C3.81675 10.138 3.40632 9.78103 2.90597 9.78632C2.40562 9.79161 2.00481 10.1571 2.01075 10.6027C2.01669 11.0483 2.42712 11.4052 2.92747 11.3999Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M4.37427 15.8895L12.0003 4.21033L19.6252 15.8895H4.37427Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.37427 8.13143V15.9727L12.0003 19.8928L19.6252 15.9727V8.13143L12.0003 4.21033L4.37427 8.13143Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.9999 5.42061C12.7505 5.42061 13.359 4.87874 13.359 4.2103C13.359 3.54187 12.7505 3 11.9999 3C11.2493 3 10.6409 3.54187 10.6409 4.2103C10.6409 4.87874 11.2493 5.42061 11.9999 5.42061Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.37492 9.30708C5.1255 9.30708 5.73397 8.76521 5.73397 8.09678C5.73397 7.42835 5.1255 6.88647 4.37492 6.88647C3.62434 6.88647 3.01587 7.42835 3.01587 8.09678C3.01587 8.76521 3.62434 9.30708 4.37492 9.30708Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.6249 9.30708C20.3755 9.30708 20.984 8.76521 20.984 8.09678C20.984 7.42835 20.3755 6.88647 19.6249 6.88647C18.8743 6.88647 18.2659 7.42835 18.2659 8.09678C18.2659 8.76521 18.8743 9.30708 19.6249 9.30708Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.0169 20.9857C12.7675 20.9777 13.3687 20.4295 13.3598 19.7611C13.3509 19.0927 12.7352 18.5573 11.9847 18.5652C11.2342 18.5732 10.633 19.1214 10.6419 19.7898C10.6508 20.4582 11.2664 20.9936 12.0169 20.9857Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.641 17.0991C20.3915 17.0911 20.9927 16.5429 20.9838 15.8745C20.9749 15.2061 20.3592 14.6707 19.6087 14.6786C18.8582 14.6866 18.257 15.2348 18.2659 15.9032C18.2748 16.5716 18.8904 17.107 19.641 17.0991Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.39121 17.0999C5.14174 17.092 5.74294 16.5437 5.73404 15.8753C5.72513 15.207 5.10948 14.6716 4.35895 14.6795C3.60842 14.6874 3.00722 15.2357 3.01613 15.9041C3.02504 16.5725 3.64068 17.1079 4.39121 17.0999Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M7.29053 26.4824L20.0006 7.01721L32.7088 26.4824H7.29053Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.29053 13.5524V26.6211L20.0006 33.1546L32.7088 26.6211V13.5524L20.0006 7.01721L7.29053 13.5524Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.9999 9.03434C21.2509 9.03434 22.265 8.13123 22.265 7.01717C22.265 5.90312 21.2509 5 19.9999 5C18.749 5 17.7349 5.90312 17.7349 7.01717C17.7349 8.13123 18.749 9.03434 19.9999 9.03434Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.29169 15.5118C8.54266 15.5118 9.55678 14.6086 9.55678 13.4946C9.55678 12.3805 8.54266 11.4774 7.29169 11.4774C6.04072 11.4774 5.02661 12.3805 5.02661 13.4946C5.02661 14.6086 6.04072 15.5118 7.29169 15.5118Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M32.7082 15.5118C33.9592 15.5118 34.9733 14.6086 34.9733 13.4946C34.9733 12.3805 33.9592 11.4774 32.7082 11.4774C31.4572 11.4774 30.4431 12.3805 30.4431 13.4946C30.4431 14.6086 31.4572 15.5118 32.7082 15.5118Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.0282 34.9759C21.279 34.9627 22.281 34.0489 22.2662 32.935C22.2514 31.821 21.2253 30.9287 19.9744 30.9419C18.7235 30.9551 17.7215 31.8689 17.7364 32.9829C17.7512 34.0968 18.7773 34.9892 20.0282 34.9759Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M32.7349 28.4985C33.9858 28.4853 34.9878 27.5715 34.973 26.4576C34.9581 25.3436 33.9321 24.4512 32.6812 24.4645C31.4303 24.4777 30.4283 25.3915 30.4431 26.5054C30.458 27.6194 31.4841 28.5117 32.7349 28.4985Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.31869 28.4997C8.56957 28.4865 9.57157 27.5728 9.55673 26.4588C9.54188 25.3448 8.5158 24.4525 7.26492 24.4657C6.01404 24.4789 5.01204 25.3927 5.02688 26.5067C5.04173 27.6206 6.0678 28.513 7.31869 28.4997Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

GraphQLIcon.propTypes = {
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
GraphQLIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default GraphQLIcon
