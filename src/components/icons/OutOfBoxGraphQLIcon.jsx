import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const OutOfBoxGraphQLIcon = ({
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
          <path d='M3.5 9.84863V11.7356L8 14L12.5 11.7356V9.84863' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 9.64515L6.61538 11.0386L2 8.94841L3.5 7.38086' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 9.64515L9.38462 11.0386L14 8.94841L12.5 7.38086' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.5 7.38086L8 9.4493L12.5 7.38086' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.45801 6.29636L8.00002 2.40332L10.5417 6.29636H5.45801Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.45801 3.71036V6.3241L8.00002 7.6308L10.5417 6.3241V3.71036L8.00002 2.40332L5.45801 3.71036Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.99989 2.80687C8.25009 2.80687 8.45291 2.62625 8.45291 2.40343C8.45291 2.18062 8.25009 2 7.99989 2C7.7497 2 7.54688 2.18062 7.54688 2.40343C7.54688 2.62625 7.7497 2.80687 7.99989 2.80687Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.45839 4.10228C5.70858 4.10228 5.9114 3.92166 5.9114 3.69884C5.9114 3.47603 5.70858 3.29541 5.45839 3.29541C5.20819 3.29541 5.00537 3.47603 5.00537 3.69884C5.00537 3.92166 5.20819 4.10228 5.45839 4.10228Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5416 4.10228C10.7918 4.10228 10.9947 3.92166 10.9947 3.69884C10.9947 3.47603 10.7918 3.29541 10.5416 3.29541C10.2914 3.29541 10.0886 3.47603 10.0886 3.69884C10.0886 3.92166 10.2914 4.10228 10.5416 4.10228Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.00573 7.99538C8.25591 7.99274 8.45631 7.80998 8.45334 7.58719C8.45037 7.36439 8.24515 7.18593 7.99498 7.18857C7.7448 7.19122 7.5444 7.37397 7.54737 7.59677C7.55034 7.81956 7.75555 7.99803 8.00573 7.99538Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.547 6.69997C10.7972 6.69733 10.9976 6.51457 10.9946 6.29178C10.9916 6.06898 10.7864 5.89052 10.5362 5.89316C10.2861 5.89581 10.0857 6.07856 10.0886 6.30136C10.0916 6.52415 10.2968 6.70262 10.547 6.69997Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.46374 6.69997C5.71391 6.69733 5.91431 6.51457 5.91135 6.29178C5.90838 6.06898 5.70316 5.89052 5.45298 5.89316C5.20281 5.89581 5.00241 6.07856 5.00538 6.30136C5.00835 6.52415 5.21356 6.70262 5.46374 6.69997Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M5.25 14.7729V17.6035L12 21.0001L18.75 17.6035V14.7729' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 14.4677L9.92308 16.5579L3 13.4226L5.25 11.0713' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 14.4677L14.0769 16.5579L21 13.4226L18.75 11.0713' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.25 11.0713L12 14.174L18.75 11.0713' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.18701 9.44455L12 3.60498L15.8125 9.44455H8.18701Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.18701 5.56553V9.48614L12 11.4462L15.8125 9.48614V5.56553L12 3.60498L8.18701 5.56553Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.9998 4.2103C12.3751 4.2103 12.6794 3.93937 12.6794 3.60515C12.6794 3.27094 12.3751 3 11.9998 3C11.6245 3 11.3203 3.27094 11.3203 3.60515C11.3203 3.93937 11.6245 4.2103 11.9998 4.2103Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.18758 6.15366C8.56287 6.15366 8.86711 5.88273 8.86711 5.54851C8.86711 5.21429 8.56287 4.94336 8.18758 4.94336C7.81229 4.94336 7.50806 5.21429 7.50806 5.54851C7.50806 5.88273 7.81229 6.15366 8.18758 6.15366Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.8126 6.15366C16.1879 6.15366 16.4921 5.88273 16.4921 5.54851C16.4921 5.21429 16.1879 4.94336 15.8126 4.94336C15.4373 4.94336 15.1331 5.21429 15.1331 5.54851C15.1331 5.88273 15.4373 6.15366 15.8126 6.15366Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.0086 11.9926C12.3839 11.9886 12.6845 11.7145 12.68 11.3803C12.6756 11.0461 12.3677 10.7784 11.9925 10.7824C11.6172 10.7863 11.3166 11.0605 11.3211 11.3947C11.3255 11.7289 11.6333 11.9966 12.0086 11.9926Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.8204 10.0497C16.1956 10.0457 16.4962 9.77162 16.4918 9.43743C16.4873 9.10323 16.1795 8.83553 15.8042 8.8395C15.429 8.84346 15.1284 9.1176 15.1328 9.45179C15.1373 9.78598 15.4451 10.0537 15.8204 10.0497Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.19561 10.0497C8.57087 10.0457 8.87147 9.77162 8.86702 9.43743C8.86256 9.10323 8.55474 8.83553 8.17948 8.8395C7.80421 8.84346 7.50361 9.1176 7.50806 9.45179C7.51252 9.78598 7.82034 10.0537 8.19561 10.0497Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M8.75 24.6216V29.3391L20 35.0001L31.25 29.3391V24.6216' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 24.1129L16.5385 27.5966L5 22.371L8.75 18.4521' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 24.1129L23.4615 27.5966L35 22.371L31.25 18.4521' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.75 18.4521L20 23.6233L31.25 18.4521' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.6453 15.7414L20.0003 6.00879L26.3544 15.7414H13.6453Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.6453 9.27638V15.8107L20.0003 19.0775L26.3544 15.8107V9.27638L20.0003 6.00879L13.6453 9.27638Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 7.01717C20.6255 7.01717 21.1325 6.56561 21.1325 6.00859C21.1325 5.45156 20.6255 5 20 5C19.3745 5 18.8674 5.45156 18.8674 6.00859C18.8674 6.56561 19.3745 7.01717 20 7.01717Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.6462 10.2559C14.2717 10.2559 14.7788 9.80438 14.7788 9.24736C14.7788 8.69033 14.2717 8.23877 13.6462 8.23877C13.0207 8.23877 12.5137 8.69033 12.5137 9.24736C12.5137 9.80438 13.0207 10.2559 13.6462 10.2559Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.3542 10.2559C26.9797 10.2559 27.4868 9.80438 27.4868 9.24736C27.4868 8.69033 26.9797 8.23877 26.3542 8.23877C25.7287 8.23877 25.2217 8.69033 25.2217 9.24736C25.2217 9.80438 25.7287 10.2559 26.3542 10.2559Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.0141 19.988C20.6395 19.9814 21.1405 19.5245 21.1331 18.9675C21.1257 18.4105 20.6126 17.9643 19.9872 17.9709C19.3618 17.9776 18.8608 18.4344 18.8682 18.9914C18.8756 19.5484 19.3886 19.9946 20.0141 19.988Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.3674 16.7492C26.9928 16.7426 27.4938 16.2857 27.4864 15.7287C27.4789 15.1717 26.9659 14.7256 26.3405 14.7322C25.715 14.7388 25.214 15.1957 25.2214 15.7527C25.2289 16.3096 25.7419 16.7558 26.3674 16.7492Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.6593 16.7502C14.2848 16.7436 14.7858 16.2867 14.7784 15.7297C14.7709 15.1727 14.2579 14.7265 13.6325 14.7331C13.007 14.7398 12.506 15.1966 12.5134 15.7536C12.5209 16.3106 13.0339 16.7568 13.6593 16.7502Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default OutOfBoxGraphQLIcon
