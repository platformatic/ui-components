import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CachingIcon = ({
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
          <path d='M11 6.99934V2.85714C11 2.38375 10.6162 2 10.1428 2H2.85714C2.38375 2 2 2.38376 2 2.85714V10.1417C2 10.6151 2.38376 10.9988 2.85714 10.9988H6.88887' stroke='none' strokeLinejoin='round' />
          <path d='M2 3.99976H11' stroke='none' />
          <path d='M10.5 9.80285C12.433 9.80285 14 9.1752 14 8.40094C14 7.62668 12.433 6.99902 10.5 6.99902C8.567 6.99902 7 7.62668 7 8.40094C7 9.1752 8.567 9.80285 10.5 9.80285Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 10.548C14 11.3222 12.4328 11.9499 10.5 11.9499C8.56722 11.9499 7 11.3222 7 10.548' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 8.40247V12.5977C14 13.3719 12.4328 13.9996 10.5 13.9996C8.56722 13.9996 7 13.3719 7 12.5977V8.40247' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.125 8.00115V6.06201H3.65151V6.81949H4.34848V6.06201H4.87499V8.00115H4.34848V7.24367H3.65151V8.00115H3.125Z' fill='none' className={filledClassName} />
          <path d='M5.07196 6.4862V6.06201H6.75756V6.4862H6.17423V8.00115H5.65529V6.4862H5.07196Z' fill='none' className={filledClassName} />
          <path d='M6.90269 6.4862V6.06201H8.58829V6.4862H8.00496L7.99998 7.49932L7.48602 8.00115V6.4862H6.90269Z' fill='none' className={filledClassName} />
          <path d='M8.78644 7.34309V6.06201H9.62356C9.7675 6.06201 9.89344 6.09042 10.0014 6.14723C10.1094 6.20404 10.1933 6.28389 10.2533 6.38678C10.3133 6.48967 10.3433 6.60992 10.3433 6.74753C10.3433 6.8864 10.3123 7.00665 10.2505 7.10828C10.1892 7.2099 10.103 7.28818 9.99193 7.34309C9.88145 7.39801 9.75235 7.42547 9.60462 7.42547H9.10462V7.01643H9.49856C9.56043 7.01643 9.61314 7.0057 9.6567 6.98424C9.70089 6.96215 9.73467 6.9309 9.75803 6.8905C9.78202 6.8501 9.79401 6.80244 9.79401 6.74753C9.79401 6.69198 9.78202 6.64464 9.75803 6.6055C9.73467 6.56573 9.70089 6.53543 9.6567 6.5146C9.61314 6.49314 9.56043 6.48241 9.49856 6.48241H9.31295V7.34309H8.78644Z' fill='none' className={filledClassName} />
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

          <path d='M16.5 10.499V3.85714C16.5 3.38375 16.1162 3 15.6428 3H3.85714C3.38375 3 3 3.38375 3 3.85714V15.6411C3 16.1145 3.38375 16.4982 3.85714 16.4982H10.3333' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M3 5.99963H16.5' stroke='none' strokeWidth={1.5} />
          <path d='M15.75 14.7042C18.6495 14.7042 21 13.7627 21 12.6013C21 11.4399 18.6495 10.4984 15.75 10.4984C12.8505 10.4984 10.5 11.4399 10.5 12.6013C10.5 13.7627 12.8505 14.7042 15.75 14.7042Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21 15.8219C21 16.9832 18.6491 17.9248 15.75 17.9248C12.8508 17.9248 10.5 16.9832 10.5 15.8219' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21 12.6036V18.8965C21 20.0578 18.6491 20.9994 15.75 20.9994C12.8508 20.9994 10.5 20.0578 10.5 18.8965V12.6036' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.6875 12.0017V9.09302H5.47727V10.2292H6.52272V9.09302H7.31249V12.0017H6.52272V10.8655H5.47727V12.0017H4.6875Z' fill='none' className={filledClassName} />
          <path d='M7.60795 9.7293V9.09302H10.1363V9.7293H9.26135V12.0017H8.48294V9.7293H7.60795Z' fill='none' className={filledClassName} />
          <path d='M10.354 9.7293V9.09302H12.8824V9.7293H12.0074L12 11.249L11.229 12.0017V9.7293H10.354Z' fill='none' className={filledClassName} />
          <path d='M13.1797 11.0146V9.09302H14.4353C14.6512 9.09302 14.8402 9.13563 15.0021 9.22084C15.164 9.30606 15.29 9.42583 15.3799 9.58017C15.4699 9.7345 15.5149 9.91488 15.5149 10.1213C15.5149 10.3296 15.4685 10.51 15.3757 10.6624C15.2838 10.8149 15.1546 10.9323 14.9879 11.0146C14.8222 11.097 14.6285 11.1382 14.4069 11.1382H13.6569V10.5246H14.2478C14.3406 10.5246 14.4197 10.5086 14.4851 10.4764C14.5513 10.4432 14.602 10.3963 14.637 10.3358C14.673 10.2752 14.691 10.2037 14.691 10.1213C14.691 10.038 14.673 9.96696 14.637 9.90825C14.602 9.8486 14.5513 9.80315 14.4851 9.77191C14.4197 9.73971 14.3406 9.72362 14.2478 9.72362H13.9694V11.0146H13.1797Z' fill='none' className={filledClassName} />
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
          <path d='M27.4999 17.4983V5.85714C27.4999 5.38375 27.1162 5 26.6428 5H5.85714C5.38375 5 5 5.38376 5 5.85714V26.6399C5 27.1133 5.38375 27.497 5.85714 27.497H17.2222' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M5 9.99939H27.4999' stroke='none' strokeWidth={2} />
          <path d='M26.25 24.507C31.0824 24.507 34.9999 22.9379 34.9999 21.0022C34.9999 19.0666 31.0824 17.4974 26.25 17.4974C21.4175 17.4974 17.5 19.0666 17.5 21.0022C17.5 22.9379 21.4175 24.507 26.25 24.507Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M34.9999 26.37C34.9999 28.3056 31.0819 29.8748 26.25 29.8748C21.418 29.8748 17.5 28.3056 17.5 26.37' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M34.9999 21.0061V31.4942C34.9999 33.4298 31.0819 34.999 26.25 34.999C21.418 34.999 17.5 33.4298 17.5 31.4942V21.0061' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.8125 20.0028V15.1549H9.12878V17.0486H10.8712V15.1549H12.1875V20.0028H10.8712V18.1091H9.12878V20.0028H7.8125Z' fill='none' className={filledClassName} />
          <path d='M12.6799 16.2154V15.1549H16.8939V16.2154H15.4356V20.0028H14.1382V16.2154H12.6799Z' fill='none' className={filledClassName} />
          <path d='M17.2567 16.2154V15.1549H21.4707V16.2154H20.0124L20 18.7482L18.715 20.0028V16.2154H17.2567Z' fill='none' className={filledClassName} />
          <path d='M21.9661 18.3576V15.1549H24.0589C24.4187 15.1549 24.7336 15.2259 25.0035 15.3679C25.2734 15.51 25.4833 15.7096 25.6332 15.9668C25.7832 16.2241 25.8581 16.5247 25.8581 16.8687C25.8581 17.2159 25.7808 17.5165 25.6261 17.7706C25.473 18.0246 25.2576 18.2203 24.9798 18.3576C24.7036 18.4949 24.3809 18.5635 24.0115 18.5635H22.7616V17.541H23.7464C23.9011 17.541 24.0329 17.5141 24.1418 17.4605C24.2522 17.4052 24.3367 17.3271 24.3951 17.2261C24.455 17.1251 24.485 17.006 24.485 16.8687C24.485 16.7298 24.455 16.6115 24.3951 16.5136C24.3367 16.4142 24.2522 16.3385 24.1418 16.2864C24.0329 16.2327 23.9011 16.2059 23.7464 16.2059H23.2824V18.3576H21.9661Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CachingIcon
