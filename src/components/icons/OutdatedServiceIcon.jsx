import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const OutdatedServiceIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  disabled = false,
  inactive = false,
  addImportantToColor = false
}) => {
  let className = `${styles.svgClassName} `
  // this will be useful if the css is used inside some integrated part, like using icons inside other svg generator
  if (!addImportantToColor) {
    className += styles[`${color}`]
  } else {
    className += styles[`important-${color}`]
  }

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
          <path d='M8.85445 4.51968C8.81412 4.43803 8.82956 4.34087 8.89392 4.27392L9.29894 3.85098C9.38217 3.76443 9.38132 3.63134 9.29636 3.54561L8.53609 2.77975C8.44256 2.68503 8.28467 2.68585 8.192 2.78056L7.87708 3.10226C7.81186 3.16921 7.71061 3.19126 7.62137 3.15941L6.96578 2.92345C6.87397 2.89079 6.81304 2.80669 6.81304 2.71361V2.22453C6.81304 2.10043 6.7075 2 6.57707 2H5.42293C5.2925 2 5.18696 2.10043 5.18696 2.22453V2.71361C5.18696 2.80669 5.12603 2.89079 5.03422 2.92345L4.37863 3.15941C4.28939 3.19126 4.18814 3.16921 4.12292 3.10226L3.808 2.78056C3.71533 2.68585 3.55744 2.68585 3.46391 2.77975L2.70364 3.54561C2.61868 3.63053 2.61783 3.76443 2.70106 3.85098L3.10608 4.27392C3.16958 4.34087 3.18588 4.43722 3.14555 4.51968L2.87096 5.08306C2.83235 5.16307 2.74826 5.2137 2.65644 5.2137H2.23598C2.10555 5.2137 2 5.31412 2 5.43823V6.38372C2 6.50783 2.10555 6.60826 2.23598 6.60826H2.67704C2.77915 6.60826 2.87011 6.67113 2.90186 6.76339L3.12496 7.41413C3.1507 7.49088 3.13182 7.57498 3.07519 7.63458L2.71222 8.01588C2.62383 8.10896 2.63241 8.25348 2.73195 8.33594L3.56859 9.03241C3.6647 9.11242 3.81058 9.10508 3.89724 9.01608L4.189 8.71724C4.25249 8.65111 4.35117 8.62825 4.43956 8.65764' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7 7H4.5L6 4L7.25 6.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='10' cy='10' r='4' stroke='none' />
          <path d='M8.05401 9.73612C8.03615 9.84904 8.02686 9.96504 8.02686 10.0833C8.02686 11.2339 8.90611 12.1667 9.99072 12.1667C10.3001 12.1667 10.5928 12.0908 10.8531 11.9556M11.8714 10.6851C11.9255 10.4946 11.9546 10.2926 11.9546 10.0833C11.9546 8.93274 11.0753 8 9.99072 8C9.55425 8 9.15103 8.15105 8.82499 8.40657' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.3496 10.0312L11.8626 10.7075L12.5001 10.1633' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.6543 10.2297L8.03758 9.65921L7.49977 10.3134' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M13.2817 6.77952C13.2212 6.65705 13.2443 6.51131 13.3409 6.41088L13.9484 5.77647C14.0733 5.64664 14.072 5.44701 13.9445 5.31842L12.8041 4.16962C12.6638 4.02755 12.427 4.02877 12.288 4.17084L11.8156 4.65339C11.7178 4.75382 11.5659 4.78688 11.432 4.73912L10.4487 4.38517C10.311 4.33618 10.2196 4.21003 10.2196 4.07042V3.3368C10.2196 3.15064 10.0612 3 9.8656 3H8.1344C7.93875 3 7.78044 3.15064 7.78044 3.3368V4.07042C7.78044 4.21003 7.68905 4.33618 7.55132 4.38517L6.56795 4.73912C6.43409 4.78688 6.28221 4.75382 6.18438 4.65339L5.712 4.17084C5.57299 4.02877 5.33616 4.02877 5.19586 4.16962L4.05545 5.31842C3.92803 5.44579 3.92674 5.64664 4.05159 5.77647L4.65912 6.41088C4.75437 6.51131 4.77883 6.65582 4.71833 6.77952L4.30645 7.62459C4.24853 7.74461 4.12239 7.82054 3.98466 7.82054H3.35396C3.15832 7.82054 3 7.97118 3 8.15734V9.57558C3 9.76174 3.15832 9.91238 3.35396 9.91238H4.01555C4.16872 9.91238 4.30516 10.0067 4.35278 10.1451L4.68744 11.1212C4.72605 11.2363 4.69774 11.3625 4.61279 11.4519L4.06833 12.0238C3.93575 12.1634 3.94862 12.3802 4.09793 12.5039L5.35289 13.5486C5.49705 13.6686 5.71586 13.6576 5.84587 13.5241L6.28349 13.0759C6.37874 12.9767 6.52676 12.9424 6.65934 12.9865' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5 10.5H6.75L9 6L10.875 9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='15' cy='15' r='6' stroke='none' strokeWidth={1.5} />
          <path d='M12.0813 14.6042C12.0545 14.7736 12.0405 14.9476 12.0405 15.125C12.0405 16.8509 13.3594 18.25 14.9863 18.25C15.4504 18.25 15.8895 18.1362 16.28 17.9334M17.8074 16.0277C17.8885 15.7419 17.9321 15.4389 17.9321 15.125C17.9321 13.3991 16.6132 12 14.9863 12C14.3316 12 13.7268 12.2266 13.2377 12.6098' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.0239 15.0469L17.7935 16.0613L18.7497 15.2449' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.9819 15.3445L12.0569 14.4887L11.2501 15.47' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M22.1361 11.2992C22.0353 11.0951 22.0739 10.8522 22.2348 10.6848L23.2473 9.62744C23.4554 9.41107 23.4533 9.07836 23.2409 8.86403L21.3402 6.94936C21.1064 6.71258 20.7117 6.71462 20.48 6.95141L19.6927 7.75565C19.5297 7.92303 19.2765 7.97814 19.0534 7.89853L17.4145 7.30862C17.1849 7.22697 17.0326 7.01672 17.0326 6.78403V5.56134C17.0326 5.25107 16.7687 5 16.4427 5H13.5573C13.2313 5 12.9674 5.25107 12.9674 5.56134V6.78403C12.9674 7.01672 12.8151 7.22697 12.5855 7.30862L10.9466 7.89853C10.7235 7.97814 10.4703 7.92303 10.3073 7.75565L9.52 6.95141C9.28832 6.71462 8.8936 6.71462 8.65977 6.94936L6.75909 8.86403C6.54671 9.07631 6.54457 9.41107 6.75265 9.62744L7.7652 10.6848C7.92395 10.8522 7.96471 11.093 7.86388 11.2992L7.17741 12.7076C7.08088 12.9077 6.87064 13.0342 6.6411 13.0342H5.58994C5.26386 13.0342 5 13.2853 5 13.5956V15.9593C5 16.2696 5.26386 16.5206 5.58994 16.5206H6.69259C6.94787 16.5206 7.17527 16.6778 7.25464 16.9085L7.8124 18.5353C7.87676 18.7272 7.82956 18.9374 7.68798 19.0865L6.78054 20.0397C6.55958 20.2724 6.58104 20.6337 6.82988 20.8399L8.92148 22.581C9.16175 22.7811 9.52644 22.7627 9.74311 22.5402L10.4725 21.7931C10.6312 21.6278 10.8779 21.5706 11.0989 21.6441' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.5 17.5H11.25L15 10L18.125 16.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='25' cy='25' r='10' stroke='none' strokeWidth={2} />
          <path d='M20.1353 24.3403C20.0906 24.6226 20.0674 24.9126 20.0674 25.2084C20.0674 28.0849 22.2655 30.4167 24.977 30.4167C25.7505 30.4167 26.4823 30.227 27.1331 29.8889M29.6788 26.7128C29.814 26.2365 29.8867 25.7314 29.8867 25.2084C29.8867 22.3319 27.6886 20 24.977 20C23.8859 20 22.8778 20.3776 22.0627 21.0164' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.3735 25.0781L29.6561 26.7688L31.2498 25.4082' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.6362 25.5742L20.0944 24.1479L18.7499 25.7835' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

OutdatedServiceIcon.propTypes = {
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
  inactive: PropTypes.bool,
  /**
   * addImportantToColor
   */
  addImportantToColor: PropTypes.bool
}

export default OutdatedServiceIcon
