import React from 'react'

function Layout (props) {
  const {
    className = 'container mx-auto px-5 my-5 flex flex-col gap-10 h-screen',
    children = null
  } = props

  return (
    <div className={className}>
      {children}
    </div>

  )
}

export default Layout
