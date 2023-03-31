import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const CircleGearIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'small':
      icon = (
        <svg
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={9} cy={9} r={8} stroke='none' />
          <path d='M9.07282 10.9405C10.1278 10.9405 10.983 10.1071 10.983 9.0791C10.983 8.05107 10.1278 7.21768 9.07282 7.21768C8.01783 7.21768 7.1626 8.05107 7.1626 9.0791C7.1626 10.1071 8.01783 10.9405 9.07282 10.9405Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.0974 4.29002V4.92175C10.0974 5.04197 10.1742 5.1506 10.29 5.19279L11.1169 5.49757C11.2294 5.53871 11.3571 5.51023 11.4394 5.42375L11.8366 5.00823C11.9535 4.88589 12.1526 4.88483 12.2706 5.00717L13.2295 5.99641C13.3366 6.10715 13.3377 6.27906 13.2327 6.39085L12.7219 6.93714C12.6407 7.02362 12.6212 7.14912 12.6721 7.25459L13.0184 7.98228C13.0671 8.08458 13.1732 8.15102 13.289 8.15102H13.8193C13.9838 8.15102 14.1169 8.28074 14.1169 8.44105V9.66231C14.1169 9.82261 13.9838 9.95233 13.8193 9.95233H13.2619C13.1332 9.95233 13.0184 10.0335 12.9784 10.1527L12.697 10.9933C12.6634 11.0924 12.6873 11.201 12.7598 11.278L13.2176 11.7705C13.329 11.8907 13.3182 12.0774 13.1927 12.1839L12.1375 13.0835C12.0162 13.1869 11.8323 13.1774 11.7229 13.0624L11.355 12.6764C11.2749 12.5921 11.1504 12.5615 11.0389 12.5995L10.2705 12.861C10.1504 12.9021 10.0703 13.0118 10.0703 13.1352V13.71C10.0703 13.8703 9.93718 14 9.77268 14H8.37004C8.20554 14 8.07242 13.8703 8.07242 13.71V13.1352C8.07242 13.0118 7.99233 12.9021 7.87219 12.861L7.10378 12.5995C6.9923 12.5615 6.86784 12.591 6.78775 12.6764L6.41978 13.0624C6.31047 13.1774 6.12648 13.1869 6.00526 13.0835L4.95004 12.1839C4.8245 12.0774 4.81367 11.8907 4.92515 11.7705L5.38295 11.278C5.45438 11.201 5.47819 11.0924 5.44572 10.9933L5.16433 10.1527C5.12429 10.0335 5.00957 9.95233 4.88077 9.95233H4.32448C4.15998 9.95233 4.02686 9.82261 4.02686 9.66231V8.44105C4.02686 8.28074 4.15998 8.15102 4.32448 8.15102H4.8548C4.9706 8.15102 5.07667 8.08564 5.12537 7.98228L5.4717 7.25459C5.52257 7.14807 5.502 7.02362 5.42191 6.93714L4.91108 6.39085C4.8061 6.27906 4.80718 6.1061 4.91432 5.99641L5.87322 5.00717C5.99119 4.88589 6.19033 4.88589 6.30722 5.00823L6.70441 5.42375C6.78667 5.51023 6.91438 5.53871 7.02693 5.49757L7.8538 5.19279C7.9696 5.1506 8.04644 5.04197 8.04644 4.92175V4.29002C8.04644 4.12972 8.17956 4 8.34407 4H9.79973C9.96424 4 10.0974 4.12972 10.0974 4.29002Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case 'medium':
      icon = (
        <svg
          width={26}
          height={26}
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={13} cy={13} r={12} stroke='none' />
          <path d='M13.109 15.9108C14.6915 15.9108 15.9743 14.6607 15.9743 13.1186C15.9743 11.5766 14.6915 10.3265 13.109 10.3265C11.5265 10.3265 10.2437 11.5766 10.2437 13.1186C10.2437 14.6607 11.5265 15.9108 13.109 15.9108Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.6463 5.93503V6.88262C14.6463 7.06296 14.7615 7.2259 14.9353 7.28918L16.1755 7.74636C16.3444 7.80806 16.5359 7.76534 16.6593 7.63563L17.2551 7.01234C17.4304 6.82883 17.7292 6.82725 17.9061 7.01076L19.3445 8.49462C19.5052 8.66073 19.5068 8.91858 19.3493 9.08627L18.5831 9.90572C18.4613 10.0354 18.4321 10.2237 18.5084 10.3819L19.0279 11.4734C19.1009 11.6269 19.26 11.7265 19.4337 11.7265H20.2292C20.476 11.7265 20.6757 11.9211 20.6757 12.1616V13.9935C20.6757 14.2339 20.476 14.4285 20.2292 14.4285H19.3932C19.2 14.4285 19.0279 14.5503 18.9678 14.7291L18.5457 15.9899C18.4954 16.1386 18.5311 16.3015 18.6399 16.417L19.3266 17.1558C19.4938 17.3361 19.4776 17.6161 19.2893 17.7759L17.7064 19.1253C17.5246 19.2803 17.2486 19.2661 17.0847 19.0937L16.5327 18.5147C16.4126 18.3881 16.2259 18.3422 16.0587 18.3992L14.906 18.7915C14.7258 18.8532 14.6057 19.0177 14.6057 19.2028V20.065C14.6057 20.3054 14.406 20.5 14.1593 20.5H12.0553C11.8085 20.5 11.6089 20.3054 11.6089 20.065V19.2028C11.6089 19.0177 11.4887 18.8532 11.3085 18.7915L10.1559 18.3992C9.9887 18.3422 9.802 18.3865 9.68187 18.5147L9.12991 19.0937C8.96594 19.2661 8.68996 19.2803 8.50814 19.1253L6.9253 17.7759C6.73699 17.6161 6.72075 17.3361 6.88797 17.1558L7.57467 16.417C7.68182 16.3015 7.71753 16.1386 7.66883 15.9899L7.24674 14.7291C7.18667 14.5503 7.01459 14.4285 6.8214 14.4285H5.98697C5.74021 14.4285 5.54053 14.2339 5.54053 13.9935V12.1616C5.54053 11.9211 5.74021 11.7265 5.98697 11.7265H6.78244C6.95615 11.7265 7.11524 11.6285 7.1883 11.4734L7.70779 10.3819C7.78409 10.2221 7.75325 10.0354 7.63311 9.90572L6.86686 9.08627C6.70939 8.91858 6.71101 8.65914 6.87173 8.49462L8.31008 7.01076C8.48703 6.82883 8.78574 6.82883 8.96107 7.01234L9.55687 7.63563C9.68025 7.76534 9.87181 7.80806 10.0406 7.74636L11.2809 7.28918C11.4546 7.2259 11.5699 7.06296 11.5699 6.88262V5.93503C11.5699 5.69458 11.7696 5.5 12.0163 5.5H14.1998C14.4466 5.5 14.6463 5.69458 14.6463 5.93503Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case 'large':
      icon = (
        <svg
          width={42}
          height={42}
          viewBox='0 0 42 42'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx={21} cy={21} r={20} stroke='none' strokeWidth={1.5} />
          <path d='M21.1818 25.8513C23.8193 25.8513 25.9574 23.7678 25.9574 21.1978C25.9574 18.6277 23.8193 16.5442 21.1818 16.5442C18.5443 16.5442 16.4062 18.6277 16.4062 21.1978C16.4062 23.7678 18.5443 25.8513 21.1818 25.8513Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M23.7436 9.22506V10.8044C23.7436 11.1049 23.9357 11.3765 24.2253 11.482L26.2924 12.2439C26.5738 12.3468 26.8931 12.2756 27.0987 12.0594L28.0917 11.0206C28.3839 10.7147 28.8818 10.7121 29.1767 11.0179L31.5739 13.491C31.8418 13.7679 31.8445 14.1976 31.5821 14.4771L30.305 15.8429C30.102 16.0591 30.0533 16.3728 30.1805 16.6365L31.0463 18.4557C31.1681 18.7115 31.4332 18.8776 31.7227 18.8776H33.0485C33.4598 18.8776 33.7926 19.2019 33.7926 19.6026V22.6558C33.7926 23.0565 33.4598 23.3808 33.0485 23.3808H31.6551C31.3331 23.3808 31.0463 23.5838 30.9462 23.8818L30.2427 25.9831C30.1589 26.231 30.2184 26.5025 30.3997 26.695L31.5442 27.9263C31.8229 28.2269 31.7958 28.6935 31.4819 28.9598L28.8439 31.2088C28.5408 31.4672 28.0809 31.4435 27.8076 31.1561L26.8877 30.1911C26.6874 29.9802 26.3763 29.9037 26.0976 29.9986L24.1766 30.6525C23.8762 30.7553 23.676 31.0295 23.676 31.338V32.7749C23.676 33.1757 23.3432 33.5 22.9319 33.5H19.4253C19.0141 33.5 18.6813 33.1757 18.6813 32.7749V31.338C18.6813 31.0295 18.4811 30.7553 18.1807 30.6525L16.2597 29.9986C15.981 29.9037 15.6698 29.9775 15.4696 30.1911L14.5497 31.1561C14.2764 31.4435 13.8164 31.4672 13.5134 31.2088L10.8753 28.9598C10.5615 28.6935 10.5344 28.2269 10.8131 27.9263L11.9576 26.695C12.1362 26.5025 12.1957 26.231 12.1146 25.9831L11.4111 23.8818C11.311 23.5838 11.0242 23.3808 10.7022 23.3808H9.31145C8.90018 23.3808 8.56738 23.0565 8.56738 22.6558V19.6026C8.56738 19.2019 8.90018 18.8776 9.31145 18.8776H10.6372C10.9268 18.8776 11.1919 18.7141 11.3137 18.4557L12.1795 16.6365C12.3067 16.3702 12.2552 16.0591 12.055 15.8429L10.7779 14.4771C10.5155 14.1976 10.5182 13.7652 10.7861 13.491L13.1833 11.0179C13.4782 10.7147 13.9761 10.7147 14.2683 11.0206L15.2613 12.0594C15.4669 12.2756 15.7862 12.3468 16.0676 12.2439L18.1347 11.482C18.4242 11.3765 18.6163 11.1049 18.6163 10.8044V9.22506C18.6163 8.8243 18.9491 8.5 19.3604 8.5H22.9996C23.4108 8.5 23.7436 8.8243 23.7436 9.22506Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleGearIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

CircleGearIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default CircleGearIcon