import * as React from 'react'
import styles from './Icons.module.css'

const DynamicWorkspaceIcon = ({ color = 'green', size = 'normal', tip = '' }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = (
    <svg
      width={40}
      height={40}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      data-tip={tip}
    >
      <rect
        x={5}
        y={5}
        width={10}
        height={12.5874}
        rx={1}
        stroke='none'
        strokeWidth={2}
      />
      <path
        d='M20 5L27.5 11.25L20 17.5V5Z'
        stroke='none'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x={35}
        y={35}
        width={10}
        height={12.5874}
        rx={1}
        transform='rotate(-180 35 35)'
        stroke='none'
        strokeWidth={2}
      />
      <rect
        x={20}
        y={35}
        width={15}
        height={12.5874}
        rx={1}
        transform='rotate(-180 20 35)'
        stroke='none'
        strokeWidth={2}
      />
      <path
        d='M27.5 15V17.5L35 11.25L27.5 5V7.5'
        stroke='none'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
  switch (size) {
    case 'small':
      icon = (
        <svg
          width={24}
          height={25}
          viewBox='0 0 24 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
          data-tip={tip}
        >
          <rect
            x={3}
            y={3.5}
            width={6}
            height={7.55245}
            rx={1}
            stroke='none'
            strokeWidth={1.5}
          />
          <path
            d='M12 3.5L16.5 7.25L12 11V3.5Z'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <rect
            x={21}
            y={21.5}
            width={6}
            height={7.55245}
            rx={1}
            transform='rotate(-180 21 21.5)'
            stroke='none'
            strokeWidth={1.5}
          />
          <rect
            x={12}
            y={21.5}
            width={9}
            height={7.55245}
            rx={1}
            transform='rotate(-180 12 21.5)'
            stroke='none'
            strokeWidth={1.5}
          />
          <path
            d='M16.5 9.5V11L21 7.25L16.5 3.5V5'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default DynamicWorkspaceIcon
