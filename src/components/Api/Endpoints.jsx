'use strict'
import React from 'react'
import BorderedText from '../BorderedText'

export default function Endpoints (props) {
  const { openapi, graphql } = props

  return (
    <span className='flex gap-2'>
      {graphql && (<BorderedText text='GraphQL' />)}
      {openapi && (<BorderedText text='REST' />)}
    </span>
  )
}
