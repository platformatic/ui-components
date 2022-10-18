'use strict'

export default function Layout (props) {
  return (
    <div className='container mx-auto px-4 my-5 flex flex-col gap-10'>
      {props.children}
    </div>

  )
}
