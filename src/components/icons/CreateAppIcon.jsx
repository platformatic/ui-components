import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CreateAppIcon = ({
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
          <path d='M2.5 5V10.8722L8 14M8 14L13.5 10.8722V5M8 14V11' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.5 6L2.5 4.85711L8 2L13.5 4.85711L11.4538 5.79253' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 6V9M6.5 7.5H9.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='8' cy='7.5' r='3.5' stroke='white' />
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
          <path d='M3.75 7.5V16.3083L12 21M12 21L20.25 16.3083V7.5M12 21V16.5' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.75 9L3.75 7.28567L12 3L20.25 7.28567L17.1807 8.6888' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 9V13.5M9.75 11.25H14.25' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='12' cy='11.25' r='5.25' stroke='white' strokeWidth={1.5} />

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
          <path d='M6.25 12.4999V27.1805L20 35M20 35L33.75 27.1805V12.4999M20 35V27.4999' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.25 15L6.25 12.1428L20 5L33.75 12.1428L28.6345 14.4813' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 15V22.5M16.25 18.75H23.75' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='20' cy='18.75' r='8.75' stroke='white' strokeWidth={2} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CreateAppIcon
