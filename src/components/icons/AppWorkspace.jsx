import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, LARGE, MAIN_DARK_BLUE, MEDIUM, SIZES, SMALL } from '../constants'

const AppWorkspace = ({
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
          <rect x={4.5} y={2} width={2.33333} height={2.93706} rx={0.5} stroke='none' />
          <rect x={8} y={2} width={3.5} height={2.93706} rx={0.5} stroke='none' />
          <rect x={11.5} y={9} width={2.33333} height={2.93706} rx={0.5} transform='rotate(-180 11.5 9)' stroke='none' />
          <rect x={8} y={9} width={3.5} height={2.93706} rx={0.5} transform='rotate(-180 8 9)' stroke='none' />
          <path d='M2.8 2.95996V2.95996C2.35817 2.95996 2 3.31813 2 3.75996V9.63996C2 10.1922 2.44772 10.64 3 10.64H13C13.5523 10.64 14 10.1922 14 9.63996V3.98701C14 3.42427 13.5359 2.97235 12.9733 2.98737L12.8804 2.98985' stroke='none' strokeLinecap='round' />
          <rect x={6} y={10.6399} width={4} height={1.92} stroke='none' />
          <path d='M4 13.5601C4 13.0078 4.44772 12.5601 5 12.5601H11C11.5523 12.5601 12 13.0078 12 13.5601V14.0001H4V13.5601Z' stroke='none' />
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
          <rect x={6.75} y={3} width={3.5} height={4.40559} rx={0.5} stroke='none' strokeWidth={1.5} />
          <rect x={12} y={3} width={5.25} height={4.40559} rx={0.5} stroke='none' strokeWidth={1.5} />
          <rect x={17.25} y={13.5} width={3.5} height={4.40559} rx={0.5} transform='rotate(-180 17.25 13.5)' stroke='none' strokeWidth={1.5} />
          <rect x={12} y={13.5} width={5.25} height={4.40559} rx={0.5} transform='rotate(-180 12 13.5)' stroke='none' strokeWidth={1.5} />
          <path d='M4.2 4.43994H4C3.44772 4.43994 3 4.88766 3 5.43994V14.9599C3 15.5122 3.44772 15.9599 4 15.9599H20C20.5523 15.9599 21 15.5122 21 14.9599V5.46699C21 4.90425 20.5359 4.45233 19.9733 4.46735L19.3205 4.48477' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x={9} y={15.96} width={6} height={2.88} stroke='none' strokeWidth={1.5} />
          <path d='M6 19.8401C6 19.2878 6.44772 18.8401 7 18.8401H17C17.5523 18.8401 18 19.2878 18 19.8401V21.0001H6V19.8401Z' stroke='none' strokeWidth={1.5} />
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
          <rect x={11.25} y={5} width={5.83333} height={7.34266} rx={0.5} stroke='none' strokeWidth={2} />
          <rect x={20} y={5} width={8.75} height={7.34266} rx={0.5} stroke='none' strokeWidth={2} />
          <rect x={28.75} y={22.5} width={5.83333} height={7.34266} rx={0.5} transform='rotate(-180 28.75 22.5)' stroke='none' strokeWidth={2} />
          <rect x={20} y={22.5} width={8.75} height={7.34266} rx={0.5} transform='rotate(-180 20 22.5)' stroke='none' strokeWidth={2} />
          <path d='M7 7.3999H6C5.44772 7.3999 5 7.84762 5 8.3999V25.5999C5 26.1522 5.44772 26.5999 6 26.5999H34C34.5523 26.5999 35 26.1522 35 25.5999V8.42695C35 7.86422 34.5359 7.41229 33.9733 7.42731L32.2009 7.47462' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x={15} y={26.5996} width={10} height={4.8} stroke='none' strokeWidth={2} />
          <path d='M10 32.4001C10 31.8479 10.4477 31.4001 11 31.4001H29C29.5523 31.4001 30 31.8479 30 32.4001V35.0001H10V32.4001Z' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AppWorkspace.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

export default AppWorkspace
