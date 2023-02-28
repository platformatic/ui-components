import * as React from 'react'
import styles from './Icons.module.css'

const EditIcon = ({ color = 'green', size = 'normal' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>
  switch (size) {
    case 'small':
      icon = (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
          <rect
            x={10.0554}
            y={4.50607}
            width={2.11765}
            height={7.76471}
            transform='rotate(45 10.0554 4.50607)'
            stroke='none'
            strokeLinejoin='round'
          />
          <path
            d='M6.06234 11.4939L4.56494 9.99654L3.81624 12.2426L6.06234 11.4939Z'
            stroke='none'
            strokeLinejoin='round'
          />
          <path
            d='M10.8456 3.71577C11.2362 3.32525 11.8693 3.32525 12.2598 3.71577L12.343 3.79896C12.7336 4.18949 12.7336 4.82265 12.343 5.21318L11.5527 6.00347L10.0553 4.50607L10.8456 3.71577Z'
            stroke='none'
          />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default EditIcon
