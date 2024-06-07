import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE, EXTRA_MEDIUM } from '../constants'

const InfrastructureIcon = ({
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
          <path d='M3.5 6H8M8 6V3M8 6L13 10.5M2.5 10.5L7.5 10L13 5.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.91602 5.42096V10.6484L8.00003 13.2618L13.0833 10.6484V5.42096L8.00003 2.80688L2.91602 5.42096Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.05 3.6C8.49183 3.6 8.85 3.24183 8.85 2.8C8.85 2.35817 8.49183 2 8.05 2C7.60817 2 7.25 2.35817 7.25 2.8C7.25 3.24183 7.60817 3.6 8.05 3.6Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.05 6.6C8.49183 6.6 8.85 6.24183 8.85 5.8C8.85 5.35817 8.49183 5 8.05 5C7.60817 5 7.25 5.35817 7.25 5.8C7.25 6.24183 7.60817 6.6 8.05 6.6Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.05 10.6C8.49183 10.6 8.85 10.2418 8.85 9.8C8.85 9.35817 8.49183 9 8.05 9C7.60817 9 7.25 9.35817 7.25 9.8C7.25 10.2418 7.60817 10.6 8.05 10.6Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.81074 6.19094C3.25257 6.19094 3.61074 5.83277 3.61074 5.39094C3.61074 4.94911 3.25257 4.59094 2.81074 4.59094C2.36891 4.59094 2.01074 4.94911 2.01074 5.39094C2.01074 5.83277 2.36891 6.19094 2.81074 6.19094Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.9772 6.19094C13.4191 6.19094 13.7772 5.83277 13.7772 5.39094C13.7772 4.94911 13.4191 4.59094 12.9772 4.59094C12.5354 4.59094 12.1772 4.94911 12.1772 5.39094C12.1772 5.83277 12.5354 6.19094 12.9772 6.19094Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.07128 13.9776C8.51308 13.973 8.86646 13.611 8.86057 13.1692C8.85468 12.7275 8.49176 12.3731 8.04996 12.3778C7.60815 12.3824 7.25477 12.7444 7.26066 13.1862C7.26655 13.6279 7.62947 13.9823 8.07128 13.9776Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.9878 11.3868C13.4296 11.3821 13.783 11.0202 13.7771 10.5784C13.7712 10.1366 13.4083 9.78229 12.9665 9.78695C12.5247 9.79162 12.1713 10.1536 12.1772 10.5953C12.1831 11.0371 12.546 11.3915 12.9878 11.3868Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.82128 11.3873C3.26308 11.3826 3.61646 11.0207 3.61057 10.5789C3.60468 10.1371 3.24176 9.78277 2.79996 9.78744C2.35815 9.79211 2.00477 10.154 2.01066 10.5958C2.01655 11.0376 2.37947 11.392 2.82128 11.3873Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M5.25 9H12M12 9V4.5M12 9L19.5 15.75M3.75 15.75L11.25 15L19.5 8.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.37451 8.13143V15.9727L12.0005 19.8928L19.6254 15.9727V8.13143L12.0005 4.21033L4.37451 8.13143Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.075 5.4C12.7377 5.4 13.275 4.86274 13.275 4.2C13.275 3.53726 12.7377 3 12.075 3C11.4123 3 10.875 3.53726 10.875 4.2C10.875 4.86274 11.4123 5.4 12.075 5.4Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.075 9.9C12.7377 9.9 13.275 9.36274 13.275 8.7C13.275 8.03726 12.7377 7.5 12.075 7.5C11.4123 7.5 10.875 8.03726 10.875 8.7C10.875 9.36274 11.4123 9.9 12.075 9.9Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.075 15.9C12.7377 15.9 13.275 15.3627 13.275 14.7C13.275 14.0373 12.7377 13.5 12.075 13.5C11.4123 13.5 10.875 14.0373 10.875 14.7C10.875 15.3627 11.4123 15.9 12.075 15.9Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.21611 9.28647C4.87885 9.28647 5.41611 8.74922 5.41611 8.08647C5.41611 7.42373 4.87885 6.88647 4.21611 6.88647C3.55337 6.88647 3.01611 7.42373 3.01611 8.08647C3.01611 8.74922 3.55337 9.28647 4.21611 9.28647Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.4656 9.28647C20.1284 9.28647 20.6656 8.74922 20.6656 8.08647C20.6656 7.42373 20.1284 6.88647 19.4656 6.88647C18.8029 6.88647 18.2656 7.42373 18.2656 8.08647C18.2656 8.74922 18.8029 9.28647 19.4656 9.28647Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.1069 20.9664C12.7696 20.9594 13.2997 20.4166 13.2909 19.7539C13.282 19.0912 12.7376 18.5597 12.0749 18.5667C11.4122 18.5737 10.8822 19.1166 10.891 19.7792C10.8998 20.4419 11.4442 20.9735 12.1069 20.9664Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.4819 17.0801C20.1446 17.0731 20.6747 16.5302 20.6659 15.8675C20.657 15.2048 20.1126 14.6733 19.4499 14.6803C18.7872 14.6873 18.2572 15.2302 18.266 15.8929C18.2748 16.5556 18.8192 17.0871 19.4819 17.0801Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.23192 17.081C4.89462 17.0739 5.42469 16.5311 5.41586 15.8684C5.40703 15.2057 4.86264 14.6742 4.19993 14.6812C3.53723 14.6882 3.00716 15.2311 3.01599 15.8937C3.02482 16.5564 3.56921 17.088 4.23192 17.081Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M7 11.9995H16M16 11.9995V5.99951M16 11.9995L26 20.9995M5 20.9995L15 19.9995L26 10.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.83252 10.8414V21.2964L16.0006 26.5232L26.1671 21.2964V10.8414L16.0006 5.61328L5.83252 10.8414Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.1 7.19951C16.9837 7.19951 17.7 6.48317 17.7 5.59951C17.7 4.71586 16.9837 3.99951 16.1 3.99951C15.2163 3.99951 14.5 4.71586 14.5 5.59951C14.5 6.48317 15.2163 7.19951 16.1 7.19951Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.1 13.1995C16.9837 13.1995 17.7 12.4832 17.7 11.5995C17.7 10.7159 16.9837 9.99951 16.1 9.99951C15.2163 9.99951 14.5 10.7159 14.5 11.5995C14.5 12.4832 15.2163 13.1995 16.1 13.1995Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.1 21.1995C16.9837 21.1995 17.7 20.4832 17.7 19.5995C17.7 18.7159 16.9837 17.9995 16.1 17.9995C15.2163 17.9995 14.5 18.7159 14.5 19.5995C14.5 20.4832 15.2163 21.1995 16.1 21.1995Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.62148 12.3816C6.50514 12.3816 7.22148 11.6653 7.22148 10.7816C7.22148 9.89798 6.50514 9.18164 5.62148 9.18164C4.73783 9.18164 4.02148 9.89798 4.02148 10.7816C4.02148 11.6653 4.73783 12.3816 5.62148 12.3816Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25.9545 12.3816C26.8381 12.3816 27.5545 11.6653 27.5545 10.7816C27.5545 9.89798 26.8381 9.18164 25.9545 9.18164C25.0708 9.18164 24.3545 9.89798 24.3545 10.7816C24.3545 11.6653 25.0708 12.3816 25.9545 12.3816Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.1426 27.9548C17.0262 27.9454 17.7329 27.2216 17.7211 26.338C17.7094 25.4544 16.9835 24.7457 16.0999 24.7551C15.2163 24.7644 14.5095 25.4883 14.5213 26.3718C14.5331 27.2554 15.2589 27.9641 16.1426 27.9548Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25.9756 22.7731C26.8592 22.7638 27.5659 22.0399 27.5542 21.1564C27.5424 20.2728 26.8165 19.5641 25.9329 19.5734C25.0493 19.5828 24.3426 20.3066 24.3543 21.1902C24.3661 22.0738 25.092 22.7825 25.9756 22.7731Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.64255 22.7741C6.52616 22.7648 7.23292 22.0409 7.22114 21.1573C7.20937 20.2738 6.48352 19.5651 5.59991 19.5744C4.7163 19.5837 4.00955 20.3076 4.02132 21.1912C4.0331 22.0747 4.75895 22.7835 5.64255 22.7741Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M8.75 15H20M20 15V7.5M20 15L32.5 26.25M6.25 26.25L18.75 25L32.5 13.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.29053 13.5524V26.6211L20.0006 33.1546L32.7088 26.6211V13.5524L20.0006 7.01721L7.29053 13.5524Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.125 9C21.2296 9 22.125 8.10457 22.125 7C22.125 5.89543 21.2296 5 20.125 5C19.0204 5 18.125 5.89543 18.125 7C18.125 8.10457 19.0204 9 20.125 9Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.125 16.5C21.2296 16.5 22.125 15.6046 22.125 14.5C22.125 13.3954 21.2296 12.5 20.125 12.5C19.0204 12.5 18.125 13.3954 18.125 14.5C18.125 15.6046 19.0204 16.5 20.125 16.5Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.125 26.5C21.2296 26.5 22.125 25.6046 22.125 24.5C22.125 23.3954 21.2296 22.5 20.125 22.5C19.0204 22.5 18.125 23.3954 18.125 24.5C18.125 25.6046 19.0204 26.5 20.125 26.5Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.02686 15.4774C8.13142 15.4774 9.02686 14.582 9.02686 13.4774C9.02686 12.3728 8.13142 11.4774 7.02686 11.4774C5.92229 11.4774 5.02686 12.3728 5.02686 13.4774C5.02686 14.582 5.92229 15.4774 7.02686 15.4774Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M32.4429 15.4774C33.5474 15.4774 34.4429 14.582 34.4429 13.4774C34.4429 12.3728 33.5474 11.4774 32.4429 11.4774C31.3383 11.4774 30.4429 12.3728 30.4429 13.4774C30.4429 14.582 31.3383 15.4774 32.4429 15.4774Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.1782 34.9441C21.2827 34.9324 22.1661 34.0276 22.1514 32.9231C22.1367 31.8187 21.2294 30.9328 20.1249 30.9444C19.0204 30.9561 18.1369 31.8609 18.1517 32.9654C18.1664 34.0699 19.0737 34.9558 20.1782 34.9441Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M32.4697 28.4669C33.5742 28.4552 34.4577 27.5504 34.4429 26.4459C34.4282 25.3415 33.5209 24.4556 32.4164 24.4673C31.3119 24.4789 30.4284 25.3838 30.4432 26.4882C30.4579 27.5927 31.3652 28.4786 32.4697 28.4669Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.05319 28.4681C8.1577 28.4565 9.04115 27.5516 9.02643 26.4472C9.01171 25.3427 8.1044 24.4568 6.99989 24.4685C5.89538 24.4802 5.01193 25.385 5.02665 26.4894C5.04137 27.5939 5.94869 28.4798 7.05319 28.4681Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

InfrastructureIcon.propTypes = {
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

export default InfrastructureIcon
