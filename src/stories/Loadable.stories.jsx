import React, { useEffect } from 'react'
import Loadable from '../components/Loadable'
import BorderedBox from '../components/BorderedBox'

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est nisl, maximus aliquet urna eu, consequat semper nisi. Nam vel elit feugiat dui congue elementum. Sed turpis urna, egestas at pharetra et, lacinia ac mauris. Pellentesque cursus, ipsum nec malesuada ornare, dui purus ultrices elit, non blandit nisi quam non nisi. Suspendisse sapien leo, ultricies pretium vulputate sed, malesuada sed justo. Suspendisse euismod erat ut lacus feugiat malesuada. In tempor a eros et egestas. Nam pretium dolor sollicitudin, cursus sem vitae, elementum enim. Nam in nisi ipsum.
`

export default {
  title: 'Platformatic/Loadable',
  component: Loadable
}

const ContentThatLoads = ({ startLoading }) => {
  startLoading()
  return <BorderedBox>{loremIpsum}</BorderedBox>
}

export const Loading = (args) => (
  <Loadable {...args}>
    <ContentThatLoads />
  </Loadable>
)
Loading.args = {}

const ContentThatLoadsAndStops = ({ startLoading, stopLoading }) => {
  useEffect(() => {
    startLoading()
    const timer = setTimeout(() => {
      stopLoading()
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  return <BorderedBox>{loremIpsum}</BorderedBox>
}

export const LoadsAndStops = (args) => {
  return (
    <Loadable {...args}>
      <ContentThatLoadsAndStops />
    </Loadable>
  )
}
LoadsAndStops.args = {}

export const LoadsAndStops2 = (args) => {
  return (
    <Loadable {...args}>
      <ContentThatLoadsAndStops />
      <ContentThatLoadsAndStops />
    </Loadable>
  )
}
LoadsAndStops2.args = {}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const ContentThatToggle = ({ startLoading, stopLoading }) => {
  useEffect(() => {
    startLoading()
    const toggle = async () => {
      await sleep(1000)
      stopLoading()
      await sleep(1000)
      startLoading(true)
    }
    toggle()
  }, [])
  return <BorderedBox>{loremIpsum}</BorderedBox>
}
export const Toggle = (args) => {
  return (
    <Loadable {...args}>
      <ContentThatToggle />
    </Loadable>
  )
}
Toggle.args = {}
