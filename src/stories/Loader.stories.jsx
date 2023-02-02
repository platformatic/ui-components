import React, { useState } from 'react'
import Loader from '../components/Loader'
import Button from '../components/Button'
import BorderedBox from '../components/BorderedBox'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est nisl, maximus aliquet urna eu, consequat semper nisi. Nam vel elit feugiat dui congue elementum. Sed turpis urna, egestas at pharetra et, lacinia ac mauris. Pellentesque cursus, ipsum nec malesuada ornare, dui purus ultrices elit, non blandit nisi quam non nisi. Suspendisse sapien leo, ultricies pretium vulputate sed, malesuada sed justo. Suspendisse euismod erat ut lacus feugiat malesuada. In tempor a eros et egestas. Nam pretium dolor sollicitudin, cursus sem vitae, elementum enim. Nam in nisi ipsum.'

export default {
  title: 'Platformatic/Loader',
  component: Loader
}

export const Loading = args =>
  <Loader {...args}>
    <BorderedBox>{loremIpsum}</BorderedBox>
  </Loader>

Loading.args = {
  loading: true
}

export const LoadsAndStops = ({ loading, ...args }) => {
  const [showLoader, setShowLoader] = useState(args.loading)
  const show = () => setShowLoader(true)
  const hide = () => setShowLoader(false)

  function load () {
    show()
    const timer = setTimeout(() => {
      hide()
    }, 2000)
    return () => clearTimeout(timer)
  }

  return (
    <Loader loading={showLoader} {...args}>
      <Button label='Start Loading' color='error-red' onClick={() => load()} />
      <BorderedBox>{loremIpsum}</BorderedBox>
    </Loader>
  )
}
LoadsAndStops.args = {
  loading: false
}
