'use strict'

import ApiFooter from './Api/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import ApiVersion from './Api/Version'
import Separator from './VerticalSeparator'
import ApiStatus from './Api/Status'
import BorderedBox from './BorderedBox'
import HorizontalSeparator from './HorizontalSeparator'

export default function API (props) {
  const { name, version, source, lastDeploy, graphql, openapi, online } = props.data
  const color = online ? 'green' : 'red'
  return (
    <BorderedBox
      color={color}
    >
      <div className='api-main'>
        <div className='flex w-full'>
          <img className='w-9 mr-5' src='api-icon.svg' />
          <div className='api-data'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-between gap-4'>
                <span className='text-main-green font-semibold text-2xl'>{name}</span>
                <span>
                  <a href='#' className='border p-2 rounded-full'>
                    <FontAwesomeIcon color='white' icon={faLink} />
                  </a>
                </span>
                <ApiVersion version={version} />
              </div>
              <div className='api-status'>
                <ApiStatus online={online} />
              </div>

            </div>

            <div className='flex gap-2 items-center'>
              <span>Generated with: {source}</span>
              <Separator />
              <span>Last deployed: {lastDeploy}</span>
            </div>
          </div>

        </div>

      </div>
      <HorizontalSeparator />
      <ApiFooter
        graphql={graphql}
        openapi={openapi}
      />
    </BorderedBox>
  )
}
