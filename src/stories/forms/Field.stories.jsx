import Field from '../../components/forms/Field'
import Button from '../../components/Button'
import Input from '../../components/forms/Input'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '10px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/Forms/Field',
  component: Field,
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}

const SimpleTemplate = (args) => (
  <div style={divStyle}>
    <Field {...args} />
  </div>
)

export const BasicField = SimpleTemplate.bind({})

BasicField.args = {
  title: 'Field basic',
  helper:
    'A very very very very very very very very very very very very very very simple helper'
}

const InputTemplate = (args) => {
  function renderChild (combinationSelected) {
    let rendered = <></>

    switch (combinationSelected) {
      case 'button':
        rendered = (
          <Button
            label='Button for a purpose'
            color='error-red'
            onClick={() => {
              alert('clicked')
            }}
          />
        )
        break
      case 'input-buttons':
        rendered = (
          <>
            <Input
              name='test'
              placeholder='Platformatic'
              errorMessage='this is an error message'
            />
            <Button
              label='Button for some purposes'
              color='main-dark-blue'
              onClick={() => {
                alert('clicked')
              }}
            />
            <Button
              label='Button for other purposes'
              color='error-red'
              onClick={() => {
                alert('clicked')
              }}
            />
          </>
        )
        break
      case 'input':
        rendered = <Input name='test' placeholder='Platformatic' />
        break
      case 'input-button':
        rendered = (
          <>
            <Input name='test' placeholder='Platformatic' />
            <Button
              label='Button Simple'
              color='main-dark-blue'
              onClick={() => {
                alert('clicked')
              }}
            />
          </>
        )
        break
      default:
        break
    }
    return rendered
  }
  return (
    <div style={divStyle}>
      {['input', 'input-button', 'input-buttons', 'button'].map((how) => {
        return (
          <Field key={how} {...args}>
            {renderChild(how)}
          </Field>
        )
      })}
    </div>
  )
}

export const WithInput = InputTemplate.bind({})

WithInput.args = {
  title: 'Different cases',
  helper: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  required: true
}

export const RedTitledField = SimpleTemplate.bind({})

RedTitledField.args = {
  title: 'Red Field Title',
  titleColor: 'error-red',
  helper:
    'A very very very very very very very very very very very very very very simple helper'
}
