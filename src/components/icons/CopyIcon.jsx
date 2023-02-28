import * as React from 'react'
import styles from './Icons.module.css'

const CopyIcon = ({ color = 'green', size = 'normal' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>
  switch (size) {
    case 'small':
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path
            d='M6 13.5V4.94496C6 4.66882 6.22386 4.44496 6.5 4.44496H10.5365C10.6594 4.44496 10.7779 4.49019 10.8696 4.57203L13.833 7.21858C13.9393 7.31345 14 7.4491 14 7.59152V13.5C14 13.7761 13.7761 14 13.5 14H6.5C6.22386 14 6 13.7761 6 13.5Z'
            stroke='none'
            strokeLinecap='round'
          />
          <path
            d='M10.5 7.78923V4.44496L14 7.78923H10.5Z'
            stroke='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.5 3.96723L7.36816 2.12196C7.27729 2.0433 7.16112 2.00001 7.04093 2.00001H4.61364H2.5C2.22386 2.00001 2 2.22386 2 2.50001L2.00001 10.6335C2.00001 10.9096 2.22386 11.1335 2.50001 11.1335H5.50001'
            stroke='none'
            strokeLinecap='round'
          />
        </svg>
      )
      break
    case 'normal':
      icon = (
        <svg
          width={24}
          height={25}
          viewBox='0 0 24 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path
            d='M9 21.3333V8.00073C9 7.72459 9.22386 7.50073 9.5 7.50073H15.9001C16.023 7.50073 16.1416 7.54597 16.2332 7.6278L20.833 11.7357C20.9393 11.8306 21 11.9662 21 12.1086V21.3333C21 21.6094 20.7761 21.8333 20.5 21.8333H9.5C9.22386 21.8333 9 21.6094 9 21.3333Z'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
          />
          <path
            d='M15.75 12.5171V7.50073L21 12.5171H15.75Z'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M14.25 6.78409L10.9818 3.95521C10.8909 3.87655 10.7748 3.83326 10.6546 3.83326H6.92045H3.5C3.22386 3.83326 3 4.05712 3 4.33326L3.00001 17.0335C3.00001 17.3096 3.22387 17.5335 3.50001 17.5335H8.25001'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
          />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default CopyIcon
