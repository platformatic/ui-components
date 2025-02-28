import React from 'react'
import Report from '../components/Report'
export default {
  title: 'Platformatic/Report',
  component: Report

}

const Template = () => {
  const steps = [
    { type: 'warning', label: 'This is a warning message' },
    { type: 'success', label: 'This is a success message' },
    { type: 'error', label: 'This is an error message' }
  ]
  return (
    <div className='text-white'>
      <Report steps={steps} />
    </div>
  )
}

export const Samples = {
  render: () => <Template timeout={5000000} />
}
