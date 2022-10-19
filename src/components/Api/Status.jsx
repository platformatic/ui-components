'use strict'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
export default function ApiStatus (props) {
  const { online } = props
  const colorClass = online ? 'text-main-green' : 'text-error-red'
  return (
    <div className={colorClass}>
      <FontAwesomeIcon icon={faCircle} size='2xs' className={`text-${colorClass} mr-1`} />
      {online && (
        'Online'
      )}

      {!online && (
        'Offline'
      )}
    </div>
  )
}
