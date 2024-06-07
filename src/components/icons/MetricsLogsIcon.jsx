import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE, EXTRA_MEDIUM } from '../constants'

const MetricsLogsIcon = ({
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
          <rect x='3.90918' y='4.84204' width='1.90909' height='6.63159' rx='0.5' stroke='none' />
          <path d='M7.72705 5.78938V3.44727C7.72705 3.17112 7.95091 2.94727 8.22705 2.94727H9.13614C9.41229 2.94727 9.63614 3.17112 9.63614 3.44727V5.78938' stroke='none' strokeLinecap='round' />
          <path d='M11.5909 5.5L11.552 2.5065C11.5484 2.22784 11.7733 2 12.052 2H12.9609C13.2345 2 13.4573 2.21991 13.4608 2.49349L13.5 5.5' stroke='none' strokeLinecap='round' />
          <path d='M2 2V13.3684H5.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='7' y='7' width='7' height='7' rx='1' stroke='none' />
          <path d='M7 8.75H14' stroke='none' />
          <circle cx='7.87492' cy='7.87492' r='0.291667' fill='none' className={filledClassName} />
          <circle cx='8.74992' cy='7.87492' r='0.291667' fill='none' className={filledClassName} />
          <circle cx='9.62492' cy='7.87492' r='0.291667' fill='none' className={filledClassName} />
          <path d='M8.16675 9.91675H11.0834' stroke='none' strokeLinecap='round' />
          <path d='M8.75 11.0833H12.8333' stroke='none' strokeLinecap='round' />
          <path d='M8.75 12.25H12.8333' stroke='none' strokeLinecap='round' />
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
          <rect x='5.86377' y='7.26318' width='2.86364' height='9.94739' rx='0.5' stroke='none' strokeWidth={1.5} />
          <path d='M11.5906 8.68431V4.92114C11.5906 4.645 11.8144 4.42114 12.0906 4.42114H13.9542C14.2304 4.42114 14.4542 4.645 14.4542 4.92114V8.68431' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M17.3864 8.25L17.3247 3.5065C17.3211 3.22784 17.546 3 17.8247 3H19.6881C19.9617 3 20.1845 3.21991 20.1881 3.49349L20.25 8.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M3 3V20.0527H8.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='10.5' y='10.5' width='10.5' height='10.5' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M10.5 13.125H21' stroke='none' strokeWidth={1.5} />
          <circle cx='11.8125' cy='11.8125' r='0.4375' fill='none' className={filledClassName} />
          <circle cx='13.125' cy='11.8125' r='0.4375' fill='none' className={filledClassName} />
          <circle cx='14.4375' cy='11.8125' r='0.4375' fill='none' className={filledClassName} />
          <path d='M12.25 14.875H16.625' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M13.125 16.625H19.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M13.125 18.375H19.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <rect x='7.81836' y='9.68408' width='3.81819' height='13.2632' rx='0.5' stroke='none' strokeWidth={1.5} />
          <path d='M15.4541 11.5788V6.39453C15.4541 6.11839 15.678 5.89453 15.9541 5.89453H18.7723C19.0484 5.89453 19.2723 6.11839 19.2723 6.39453V11.5788' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M23.1818 11L23.0974 4.5065C23.0938 4.22784 23.3187 4 23.5974 4H26.4153C26.6889 4 26.9117 4.21991 26.9153 4.49349L27 11' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M4 4V26.7369H11' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='14' y='14' width='14' height='14' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M14 17.5H28' stroke='none' strokeWidth={1.5} />
          <circle cx='15.7498' cy='15.7498' r='0.583333' fill='none' className={filledClassName} />
          <ellipse cx='17.4998' cy='15.7498' rx='0.583334' ry='0.583333' fill='none' className={filledClassName} />
          <ellipse cx='19.2498' cy='15.7498' rx='0.583334' ry='0.583333' fill='none' className={filledClassName} />
          <path d='M16.3335 19.8335H22.1668' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M17.5 22.1665H25.6667' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M17.5 24.5H25.6667' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <rect x='9.77295' y='12.1052' width='4.77273' height='16.579' rx='0.5' stroke='none' strokeWidth={2} />
          <path d='M19.3176 14.4737V7.86841C19.3176 7.59227 19.5415 7.36841 19.8176 7.36841H23.5904C23.8665 7.36841 24.0904 7.59227 24.0904 7.86841V14.4737' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M28.9775 13.75L28.8704 5.5065C28.8667 5.22784 29.0916 5 29.3703 5H33.1428C33.4164 5 33.6392 5.21991 33.6427 5.49349L33.7502 13.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M5 5V33.4211H13.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='17.5' y='17.5' width='17.5' height='17.5' rx='1' stroke='none' strokeWidth={2} />
          <path d='M17.5 21.875H35' stroke='none' strokeWidth={2} />
          <circle cx='19.6874' cy='19.6874' r='0.729167' fill='none' className={filledClassName} />
          <circle cx='21.8749' cy='19.6874' r='0.729167' fill='none' className={filledClassName} />
          <circle cx='24.0624' cy='19.6874' r='0.729167' fill='none' className={filledClassName} />
          <path d='M20.4167 24.7917H27.7084' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M21.875 27.7083H32.0833' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M21.875 30.625H32.0833' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

MetricsLogsIcon.propTypes = {
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

export default MetricsLogsIcon
