import React, { useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import Button from '../components/Button'
import BorderedBox from '../components/BorderedBox'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est nisl, maximus aliquet urna eu, consequat semper nisi. Nam vel elit feugiat dui congue elementum. Sed turpis urna, egestas at pharetra et, lacinia ac mauris. Pellentesque cursus, ipsum nec malesuada ornare, dui purus ultrices elit, non blandit nisi quam non nisi. Suspendisse sapien leo, ultricies pretium vulputate sed, malesuada sed justo. Suspendisse euismod erat ut lacus feugiat malesuada. In tempor a eros et egestas. Nam pretium dolor sollicitudin, cursus sem vitae, elementum enim. Nam in nisi ipsum.'

export default {
  title: 'Platformatic/LoadingSpinner',
  component: LoadingSpinner
}

export const Loading = args =>
  <LoadingSpinner {...args}>
    <BorderedBox>{loremIpsum}</BorderedBox>
  </LoadingSpinner>

Loading.args = {
  loading: true
}

export const LoadsAndStops = ({ loading, ...args }) => {
  const [showLoadingSpoinner, setShowLoadingSpoinner] = useState(args.loading)
  const show = () => setShowLoadingSpoinner(true)
  const hide = () => setShowLoadingSpoinner(false)

  function load () {
    show()
    const timer = setTimeout(() => {
      hide()
    }, 2000)
    return () => clearTimeout(timer)
  }

  return (
    <LoadingSpinner loading={showLoadingSpoinner} {...args}>
      <Button label='Start Loading' color='error-red' onClick={() => load()} />
      <BorderedBox>{loremIpsum}</BorderedBox>
    </LoadingSpinner>
  )
}
LoadsAndStops.args = {
  loading: false
}
