'use strict'
import React from 'react'
import { getColor } from '../lib/utils'
export default function StatValue (props) {
  const { value, color, label, pre } = props
  return (
    <>
      {pre && <span>{pre}</span>}
      <span className={`text-5xl ${getColor('text', color)}`}>
        {value}
      </span>
      <span>{label}</span>
    </>

  )
}
