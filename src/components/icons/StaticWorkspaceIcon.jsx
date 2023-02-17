import * as React from 'react'
import styles from './Icons.module.css'

const StaticWorkspaceIcon = ({
  color = 'green',
  size = 'normal',
  tip = ''
}) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = (
    <svg
      width={40}
      height={41}
      viewBox='0 0 40 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      data-tip={tip}
    >
      <rect
        x={5}
        y={5.33325}
        width={10}
        height={12.5874}
        rx={1}
        stroke='none'
        strokeWidth={2.5}
      />
      <rect
        x={20}
        y={5.33325}
        width={15}
        height={12.5874}
        rx={1}
        stroke='none'
        strokeWidth={2.5}
      />
      <rect
        x={35}
        y={35.3333}
        width={10}
        height={12.5874}
        rx={1}
        transform='rotate(-180 35 35.3333)'
        stroke='none'
        strokeWidth={2.5}
      />
      <rect
        x={20}
        y={35.3333}
        width={15}
        height={12.5874}
        rx={1}
        transform='rotate(-180 20 35.3333)'
        stroke='none'
        strokeWidth={2.5}
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
          <rect
            x={12}
            y={3.5}
            width={9}
            height={7.55245}
            rx={1}
            stroke='none'
            strokeWidth={1.5}
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
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default StaticWorkspaceIcon
