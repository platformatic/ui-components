import React from 'react'
import styles from './Logo.module.css'
export default function Logo ({ width = 107, heigth = 86, color = 'white' }) {
  const className = styles[`${color}`]
  return (
    <svg
      width={width}
      height={heigth}
      viewBox='0 0 107 86'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        id='platformatic-cloud'
        d='M30.8197 62.5803H89.7919V62.5614C92.0266 62.4574 94.2096 61.8539 96.1799 60.7954C98.1502 59.7369 99.8577 58.2503 101.177 56.4452C102.496 54.6401 103.392 52.5624 103.801 50.3652C104.21 48.168 104.12 45.9072 103.538 43.7493C102.956 41.5915 101.897 39.5915 100.438 37.8967C98.9799 36.202 97.1596 34.8556 95.1114 33.9567C93.0632 33.0579 90.8392 32.6294 88.6032 32.703C86.3673 32.7765 84.1763 33.3502 82.1917 34.3817C80.9669 31.5572 79.1131 29.0491 76.7716 27.0482C74.43 25.0473 71.6623 23.6064 68.6792 22.8352M18.1691 22.8352C13.8266 23.9537 9.97973 26.4828 7.23367 30.0244C4.48761 33.566 2.99827 37.9192 3 42.399C3.00173 46.8787 4.49443 51.2307 7.24322 54.7702C9.992 58.3098 13.8409 60.8359 18.1841 61.951'
        stroke='none'
        strokeWidth={4.21053}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M41.4979 35.2219L33.6299 37.9838L37.0924 45.3197'
        stroke='#21FA90'
        strokeWidth={4.21053}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M33.8069 38.1138C37.3946 40.2213 41.5789 41.0853 45.709 40.5715C49.8391 40.0577 53.6834 38.1948 56.6441 35.2727C59.6047 32.3505 61.5157 28.5329 62.0797 24.4136C62.6437 20.2943 61.8292 16.1043 59.7628 12.4953C57.6964 8.88629 54.494 6.0606 50.6537 4.45774C46.8135 2.85489 42.5506 2.56474 38.5281 3.63241C34.5057 4.70009 30.9492 7.06574 28.4119 10.3614C25.8745 13.6571 24.4986 17.698 24.498 21.8556V49.9806'
        stroke='#21FA90'
        strokeWidth={4.21053}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.2'
        d='M24.498 79.7146V83.0001'
        stroke='#21FA90'
        strokeWidth={4.21053}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        d='M24.5283 69.3757V74.5658'
        stroke='#21FA90'
        strokeWidth={4.21053}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.7'
        d='M24.498 55.3254V64.0028'
        stroke='#21FA90'
        strokeWidth={4.21053}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
