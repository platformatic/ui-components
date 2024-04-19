import React, { useState } from 'react'
import ModalStepsForward from '../components/ModalStepsForward'
import Button from '../components/Button'
import {
  MAIN_DARK_BLUE,
  MAIN_GREEN,
  MODAL_LAYOUTS,
  MODAL_SIZES
} from '../components/constants'
export default {
  title: 'Platformatic/ModalStepsForward',
  component: ModalStepsForward,
  argTypes: {
    layout: {
      type: 'string',
      control: {
        type: 'radio',
        options: MODAL_LAYOUTS
      }
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: MODAL_SIZES
      }
    }
  }
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const { text, ...rest } = args
  return (
    <main>
      <Button
        color={MAIN_GREEN}
        backgroundColor={MAIN_DARK_BLUE}
        onClick={() => setIsOpen(true)}
        label='Open Modal'
        bold
      />
      {isOpen && (
        <ModalStepsForward setIsOpen={setIsOpen} {...rest}>
          {text}
        </ModalStepsForward>
      )}
    </main>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const SmallContentLeft = Template.bind({})
SmallContentLeft.args = {
  left: (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis,
      elit aliquam ullamcorper consectetur, nunc erat blandit turpis, dignissim
      efficitur risus eros a erat. Vestibulum rutrum odio turpis, vel mollis
      neque ullamcorper at. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Proin accumsan leo sed nunc
      tristique tempor. Duis sit amet viverra nunc. Aliquam vehicula elit ut
      sodales pharetra. Sed imperdiet tempor urna id porta. Nullam ante velit,
      aliquet a eleifend quis, vulputate sit amet metus. Nullam faucibus libero
      at velit mattis tempus. Suspendisse potenti. Sed vitae enim ut magna
      rutrum volutpat at sed augue. Sed sed neque porttitor, gravida lorem
      vitae, semper felis.
    </div>
  )
}

export const LongContentLeft = Template.bind({})
LongContentLeft.args = {
  left: (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis,
      elit aliquam ullamcorper consectetur, nunc erat blandit turpis, dignissim
      efficitur risus eros a erat. Vestibulum rutrum odio turpis, vel mollis
      neque ullamcorper at. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Proin accumsan leo sed nunc
      tristique tempor. Duis sit amet viverra nunc. Aliquam vehicula elit ut
      sodales pharetra. Sed imperdiet tempor urna id porta. Nullam ante velit,
      aliquet a eleifend quis, vulputate sit amet metus. Nullam faucibus libero
      at velit mattis tempus. Suspendisse potenti. Sed vitae enim ut magna
      rutrum volutpat at sed augue. Sed sed neque porttitor, gravida lorem
      vitae, semper felis.
      <br />
      <br />
      Mauris eget ultrices eros. Maecenas condimentum tristique odio, sit amet
      pellentesque lacus pretium sit amet. Etiam sed egestas nibh. Curabitur
      auctor posuere ante vel tempor. Etiam a vehicula erat. Cras aliquet eros
      ut magna vestibulum rhoncus. Sed sed vestibulum metus. Nam sed magna
      velit. Sed sit amet fermentum libero. Maecenas et faucibus elit. Integer
      ligula magna, congue et posuere nec, lobortis sed dui. Suspendisse
      potenti. Cras vestibulum nunc non volutpat tempus. In ultrices elementum
      consectetur. Vestibulum justo risus, rutrum et augue ac, suscipit lobortis
      erat. Sed rutrum sem at tortor molestie, tempus sagittis diam pulvinar.
      <br />
      <br />
      Nullam lacinia tortor ipsum. Curabitur nec nulla ut orci volutpat pulvinar
      ac ut sapien. Vestibulum aliquet ultricies leo, in cursus nibh cursus nec.
      In eget faucibus lorem. Sed fringilla efficitur tellus. Cras faucibus
      mauris eget dolor vehicula auctor. Vestibulum dignissim orci id fringilla
      bibendum.
      <br />
      <br />
      Morbi maximus sem ac nulla bibendum, eleifend blandit nunc sodales.
      Quisque maximus dapibus diam eu condimentum. Aenean ac justo viverra,
      pellentesque eros id, porta lectus. In ac risus orci. Fusce eleifend
      sollicitudin pellentesque. Nulla facilisi. Aenean nec nunc ut felis
      bibendum bibendum. Sed quam neque, scelerisque nec luctus a, facilisis non
      ante.
      <br />
      <br />
      Nullam id mauris vitae mi dignissim consequat eget sed leo. Maecenas
      venenatis orci sed blandit lobortis. Donec a purus risus. Phasellus mollis
      sem a ipsum cursus ultricies. Sed malesuada sit amet mi a ullamcorper.
      Mauris sodales eget nulla at porttitor. Etiam arcu mi, efficitur hendrerit
      metus ut, blandit molestie sapien. Nunc commodo justo nec mi volutpat, sit
      amet cursus tortor eleifend. Pellentesque tincidunt ac mauris at faucibus.
      Quisque sed purus quis nibh aliquet ullamcorper. Nunc est sem, accumsan eu
      pellentesque non, volutpat a nisl. Proin eu dolor ac quam dictum lobortis
      at ut elit. Aenean nec dui orci. Praesent aliquet eget metus vel
      elementum.
    </div>
  )
}
