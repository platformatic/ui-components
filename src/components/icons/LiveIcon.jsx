import * as React from 'react'
import styles from './Icons.module.css'
const LiveIcon = ({ color = 'green', size = 'normal' }) => {
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
          <circle cx={8} cy={8.75137} r={1.5} fill='none' />
          <path
            d='M6 6.51529C5.38625 7.06461 5 7.8629 5 8.7514C5 9.6399 5.38625 10.4382 6 10.9875M10 6.51529C10.6137 7.06461 11 7.8629 11 8.7514C11 9.6399 10.6137 10.4382 10 10.9875'
            stroke='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11 5.39722C11.9206 6.2212 12.5 7.41863 12.5 8.75138C12.5 10.0841 11.9206 11.2816 11 12.1055M5 5.39722C4.07938 6.2212 3.5 7.41863 3.5 8.75138C3.5 10.0841 4.07938 11.2816 5 12.1055'
            stroke='none'
            strokeLinecap='round'
          />
          <path
            d='M12 4.27916C13.2275 5.3778 14 6.97437 14 8.75137C14 10.6328 13.134 12.312 11.779 13.412M4.33558 4C2.91494 5.09726 2 6.81747 2 8.75137C2 10.5434 2.78563 12.152 4.03126 13.2514'
            stroke='none'
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

export default LiveIcon
