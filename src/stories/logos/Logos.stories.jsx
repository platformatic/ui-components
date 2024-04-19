import React from 'react'
import { SIZES, WHITE, MAIN_DARK_BLUE } from '../../components/constants'
import Logos from '../../components/logos'

const divStyle = {
  width: '100%'
}

const row = {
  display: 'flex',
  width: '100%',
  columnGap: '1rem',
  alignItems: 'center'
}

const col = {
  flex: 1
}

const paragraph = {
  fontSize: '12px'
}

export default {
  title: 'Platformatic/Logos',
  component: Logos,
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: [WHITE, MAIN_DARK_BLUE]
      }
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: [SIZES]
      }
    }
  }
}

const AllLogosTemplate = (args) => {
  const logos = Object.values(Logos)
  let divBackgrounColor = { ...divStyle, backgroundColor: WHITE }
  let paragraphClass = { ...paragraph, color: MAIN_DARK_BLUE }
  if (args.backgroundColor === 'main-dark-blue') {
    divBackgrounColor = { ...divStyle, backgroundColor: MAIN_DARK_BLUE }
    paragraphClass = { ...paragraph, color: WHITE }
  }
  return (
    <div style={divBackgrounColor}>
      <p style={paragraphClass}> All Logos: {logos.length} </p>
      {logos.map((LogoComponent, index) => (
        <div style={row} key={index}>
          <div style={col}>
            <p style={paragraphClass}>
              #{index + 1}: {LogoComponent.name}
            </p>
          </div>
          <div style={col}>
            <LogoComponent key={LogoComponent.name} {...args} />
          </div>
          <div style={col}>
            <LogoComponent
              key={LogoComponent.name}
              width={142}
              height={63}
              {...args}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
export const PlatformaticIconWhite = AllLogosTemplate.bind({})
PlatformaticIconWhite.args = {}

export const PlatformaticIconMainDarkBlue = AllLogosTemplate.bind({})
PlatformaticIconMainDarkBlue.args = {
  backgroundColor: 'main-dark-blue'
}
