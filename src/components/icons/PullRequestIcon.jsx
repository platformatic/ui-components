import * as React from 'react'

const PullRequestIcon = () => (
  <svg
    width={40}
    height={40}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx={9.5} cy={30.5} r={4.5} stroke='#fff' strokeWidth={2} />
    <circle cx={9.5} cy={9.5} r={4.5} stroke='#fff' strokeWidth={2} />
    <path stroke='#fff' strokeWidth={2} d='M9 14v12' />
    <circle cx={30.5} cy={30.5} r={4.5} stroke='#fff' strokeWidth={2} />
    <path
      d='M30.5 26V10.5a1 1 0 0 0-1-1H23'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='m26 5-4.5 4.5L26 14'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default PullRequestIcon
