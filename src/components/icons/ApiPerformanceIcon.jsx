import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ApiPerformanceIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  const filledClassName = styles[`filled-${color}`]
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
          <path d='M7.2002 13L8.27465 10H8.82565L9.90355 13H9.31811L8.43651 10.3514H8.65691L7.77186 13H7.2002ZM7.73742 12.3571L7.8855 11.83H9.12526L9.27678 12.3571H7.73742Z' fill='none' className={filledClassName} />
          <path d='M10.1537 13V10H11.1971C11.4129 10 11.5989 10.0443 11.755 10.1329C11.9111 10.2186 12.0316 10.3429 12.1166 10.5057C12.2015 10.6686 12.244 10.8629 12.244 11.0886C12.244 11.3114 12.2015 11.5043 12.1166 11.6671C12.0316 11.83 11.9111 11.9557 11.755 12.0443C11.5989 12.13 11.4129 12.1729 11.1971 12.1729H10.4636L10.7115 11.86V13H10.1537ZM10.7115 11.9371L10.4636 11.6071H11.1661C11.3383 11.6071 11.4669 11.5614 11.5518 11.47C11.6368 11.3786 11.6792 11.2514 11.6792 11.0886C11.6792 10.9229 11.6368 10.7943 11.5518 10.7029C11.4669 10.6114 11.3383 10.5657 11.1661 10.5657H10.4636L10.7115 10.2357V11.9371Z' fill='none' className={filledClassName} />
          <path d='M12.6423 13V10H13.2002V13H12.6423Z' fill='none' className={filledClassName} />
          <path d='M14 14V9H6.5V14H14Z' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 7.5V5.5C6 5.22386 5.77614 5 5.5 5H4.5C4.22386 5 4 5.22386 4 5.5V11.5C4 11.7761 4.22386 12 4.5 12H5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 7.5V3.5C10 3.22386 9.77614 3 9.5 3H8.5C8.22386 3 8 3.22386 8 3.5V7.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 7.5V2.5C14 2.22386 13.7761 2 13.5 2H12.5C12.2239 2 12 2.22386 12 2.5V7.5' stroke='white' strokeLinecap='round' />
          <path d='M2 2V14H4.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M10.8003 19.5L12.412 15H13.2385L14.8553 19.5H13.9772L12.6548 15.5271H12.9854L11.6578 19.5H10.8003ZM11.6061 18.5357L11.8283 17.745H13.6879L13.9152 18.5357H11.6061Z' fill='none' className={filledClassName} />
          <path d='M15.2305 19.5V15H16.7957C17.1194 15 17.3983 15.0664 17.6325 15.1993C17.8667 15.3279 18.0475 15.5143 18.1749 15.7586C18.3023 16.0029 18.366 16.2943 18.366 16.6329C18.366 16.9671 18.3023 17.2564 18.1749 17.5007C18.0475 17.745 17.8667 17.9336 17.6325 18.0664C17.3983 18.195 17.1194 18.2593 16.7957 18.2593H15.6954L16.0673 17.79V19.5H15.2305ZM16.0673 17.9057L15.6954 17.4107H16.7492C17.0075 17.4107 17.2003 17.3421 17.3277 17.205C17.4551 17.0679 17.5189 16.8771 17.5189 16.6329C17.5189 16.3843 17.4551 16.1914 17.3277 16.0543C17.2003 15.9171 17.0075 15.8486 16.7492 15.8486H15.6954L16.0673 15.3536V17.9057Z' fill='none' className={filledClassName} />
          <path d='M18.9635 19.5V15H19.8003V19.5H18.9635Z' fill='none' className={filledClassName} />
          <path d='M21 21V13.5H9.75V21H21Z' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 11.25V8C9 7.72386 8.77614 7.5 8.5 7.5H6.5C6.22386 7.5 6 7.72386 6 8V17.5C6 17.7761 6.22386 18 6.5 18H7.5' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 11.25V5C15 4.72386 14.7761 4.5 14.5 4.5H12.5C12.2239 4.5 12 4.72386 12 5V11.25' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21 11.25V3.5C21 3.22386 20.7761 3 20.5 3H18.5C18.2239 3 18 3.22386 18 3.5V11.25' stroke='white' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M3 3V21H6.75' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M18.0005 32.5L20.6866 25H22.0641L24.7589 32.5H23.2953L21.0913 25.8786H21.6423L19.4296 32.5H18.0005ZM19.3436 30.8929L19.7138 29.575H22.8131L23.192 30.8929H19.3436Z' fill='none' className={filledClassName} />
          <path d='M25.3841 32.5V25H27.9928C28.5323 25 28.9972 25.1107 29.3875 25.3321C29.7778 25.5464 30.0791 25.8571 30.2915 26.2643C30.5039 26.6714 30.61 27.1571 30.61 27.7214C30.61 28.2786 30.5039 28.7607 30.2915 29.1679C30.0791 29.575 29.7778 29.8893 29.3875 30.1107C28.9972 30.325 28.5323 30.4321 27.9928 30.4321H26.159L26.7788 29.65V32.5H25.3841ZM26.7788 29.8429L26.159 29.0179H27.9153C28.3458 29.0179 28.6672 28.9036 28.8795 28.675C29.0919 28.4464 29.1981 28.1286 29.1981 27.7214C29.1981 27.3071 29.0919 26.9857 28.8795 26.7571C28.6672 26.5286 28.3458 26.4143 27.9153 26.4143H26.159L26.7788 25.5893V29.8429Z' fill='none' className={filledClassName} />
          <path d='M31.6058 32.5V25H33.0005V32.5H31.6058Z' fill='none' className={filledClassName} />
          <path d='M35 35V22.5H16.25V35H35Z' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 18.75V13C15 12.7239 14.7761 12.5 14.5 12.5H10.5C10.2239 12.5 10 12.7239 10 13V29.5C10 29.7761 10.2239 30 10.5 30H12.5' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 18.75V8C25 7.72386 24.7761 7.5 24.5 7.5H20.5C20.2239 7.5 20 7.72386 20 8V18.75' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M35 18.75V5.5C35 5.22386 34.7761 5 34.5 5H30.5C30.2239 5 30 5.22386 30 5.5V18.75' stroke='white' strokeWidth={2} strokeLinecap='round' />
          <path d='M5 5V35H11.25' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ApiPerformanceIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

ApiPerformanceIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default ApiPerformanceIcon
