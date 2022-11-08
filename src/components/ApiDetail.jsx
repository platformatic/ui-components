'use strict'

import Endpoints from './Api/Endpoints'
import BorderedBox from './BorderedBox'
import BorderedText from './BorderedText'
import HorizontalSeparator from './HorizontalSeparator'
import TextWithLabel from './TextWithLabel'
import VerticalSeparator from './VerticalSeparator'
import React from 'react'
import styles from './ApiDetail.module.css'
export default function ApiDetails (props) {
  const { url, repository, version, openapi, graphql, source, lastDeploy } = props
  return (
    <>
      <BorderedBox classes='api-data'>
        <div className={styles.main}>
          <div>
            Preview/Staging URL: <a href={url}>{url}</a>
          </div>
          <div>
            Repository: <a href={`https://github.com/${repository}`}>{repository}</a>
          </div>
          <div>
            Version: <BorderedText text={`v${version}`} />
          </div>
        </div>
        <HorizontalSeparator />
        <div className='flex gap-2 items-center'>
          <TextWithLabel label='Generated With' text={source} />
          <VerticalSeparator />
          <TextWithLabel label='Last deployed' text={lastDeploy} />
        </div>
        <div className='flex items-center'>
          <span className='mr-2'>Endpoints: </span><Endpoints graphql={graphql} openapi={openapi} />
        </div>
      </BorderedBox>
    </>

  )
}
