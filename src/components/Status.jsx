'use strict'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
export default function Status (props) {
  const { color, status } = props

  function getColorClass (color) {
    switch (color) {
      case 'green':
        return 'text-main-green'
      case 'red':
        return 'text-error-red'
      case 'white':
      default:
        return 'text-white'
    }
  }
  const colorClass = getColorClass(color)
  return (
    <div className={colorClass}>
      <FontAwesomeIcon icon={faCircle} size='2xs' className={`text-${colorClass} mr-2`} />
      {status}
    </div>
  )
}
