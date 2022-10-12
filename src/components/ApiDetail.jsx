'use strict'

import BorderedBox from './BorderedBox'
import StatsView from './StatView'

export default function ApiDetails (props) {
  // const { url, repository, version } = props
  const requestStats = {
    mainStat: {
      value: 12,
      label: 'Total',
      color: 'green'
    },
    otherStats: [
      {
        value: 8,
        label: 'per minute',
        color: 'green'
      },
      {
        value: 0.5,
        label: 'per second',
        color: 'green'
      }
    ]
  }

  const latencyStats = {
    mainStat: {
      value: 150,
      label: 'ms',
      color: 'green',
      pre: 'P90'
    },
    otherStats: [
      {
        value: 600,
        label: 'ms',
        color: 'green',
        pre: 'P99'
      },
      {
        value: 4.42,
        label: 's',
        color: 'green',
        pre: 'P95'
      }
    ]
  }
  return (
    <>
      <BorderedBox>
        Api Details Here
      </BorderedBox>
      <div className='flex'>
        <BorderedBox>
          <StatsView
            title='Requests'
            tooltip='Number of requests'
            stats={requestStats}
          />
        </BorderedBox>
        <BorderedBox>
          <StatsView
            title='Latency'
            tooltip='Request Latency'
            stats={latencyStats}
          />
        </BorderedBox>
      </div>
      <div className='flex'>
        <BorderedBox>
          Connected Clients
        </BorderedBox>
        <BorderedBox>
          Failure Rate
        </BorderedBox>
      </div>
    </>

  )
}
