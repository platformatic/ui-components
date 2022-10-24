'use strict'

import Endpoints from './Api/Endpoints'
import BorderedBox from './BorderedBox'
import BorderedText from './BorderedText'
import HorizontalSeparator from './HorizontalSeparator'
import TwoColumnsLayout from './layouts/TwoColumnsLayout'
import StatsView from './StatsView'
import VerticalSeparator from './VerticalSeparator'
import React from 'react'
export default function ApiDetails (props) {
  const { url, repository, version, openapi, graphql, source, lastDeploy } = props
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
      <BorderedBox classes='api-data'>
        <div>
          Preview/Staging URL: <a href={url}>{url}</a>
        </div>
        <div>
          Repository: <a href={`https://github.com/${repository}`}>{repository}</a>
        </div>
        <div>
          Version: <BorderedText text={`v${version}`} />
        </div>
        <HorizontalSeparator />
        <div className='flex gap-2 items-center'>
          <span>Generated with: {source}</span>
          <VerticalSeparator />
          <span>Last deployed: {lastDeploy}</span>
        </div>
        <div className='flex items-center'>
          <span className='mr-2'>Endpoints: </span><Endpoints graphql={graphql} openapi={openapi} />
        </div>
      </BorderedBox>
      <TwoColumnsLayout>
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
      </TwoColumnsLayout>

      <TwoColumnsLayout>
        <BorderedBox>
          Connected Clients
        </BorderedBox>
        <BorderedBox>
          Failure Rate
        </BorderedBox>
      </TwoColumnsLayout>
    </>

  )
}
