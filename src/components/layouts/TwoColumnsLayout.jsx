'use strict'
import React from 'react'
export default function TwoColumnsLayout (props) {
  return (
    <div className='grid grid-cols-2 gap-x-4'>
      {props.children}
    </div>
  )
}
