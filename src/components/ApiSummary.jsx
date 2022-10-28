'use strict'

import ApiFooter from './Api/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import ApiVersion from './Api/Version'
import ApiIcon from './icons/ApiIcon'
import ApiIconClosed from './Api/ApiIconClosed'
import Separator from './VerticalSeparator'
import ApiStatus from './Api/Status'
import BorderedBox from './BorderedBox'
import HorizontalSeparator from './HorizontalSeparator'
import styles from './Api.module.css'
import React, { useState } from 'react'

function ApiName (props) {
  const { name } = props
  return (
    <span className='text-main-green font-semibold text-2xl'>{name}</span>
  )
}
export default function ApiSummary (props) {
  const [isOpen, setIsOpen] = useState(true)
  const { name, version, source, lastDeploy, graphql, openapi, online, db } = props
  const color = online ? 'green' : 'red'
  return (
    <BorderedBox
      color={color}
    >
      {isOpen && (
        <>
          <div className={styles.main}>
            <div className='flex w-full'>
              <div className='w-9 mr-5'><ApiIcon /></div>
              <div className={styles.data}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center justify-between gap-4'>
                    <ApiName name={name} />
                    <span><FontAwesomeIcon color='white' icon={faLink} /></span>
                    <ApiVersion version={version} />
                  </div>
                  <div className={styles.status}>
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
            db={db}
          />
        </>
      )}
      {!isOpen && (
        <div className='flex items-center'>
          <img className='w-9 mr-5' src={<ApiIconClosed />} />
          <ApiName name={name} />
          <span onClick={() => { setIsOpen(!isOpen) }} className='ml-4 hover:cursor-pointer'>Click here to set up your api</span>
        </div>

      )}
    </BorderedBox>
  )
}
