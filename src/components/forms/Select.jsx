'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN, MEDIUM } from '../constants'
import BorderedBox from '../BorderedBox'
import Icons from '../icons'

function Select ({ defaultOption, name, options, borderColor, errorMessage, onChange, disabled, focused }) {
  const selectClassName = styles.select + ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`]
  const showError = errorMessage.length > 0
  let className = styles.selectContainer
  if (showError) className += ' ' + commonStyles['bordered--error-red']
  if (disabled) className += ' ' + commonStyles['apply-opacity-30']

  const cmp = (
    <div className={styles.container}>
      <div className={className}>
        <select name={name} className={selectClassName} onChange={onChange} disabled={disabled} defaultValue={defaultOption}>
          <option value={defaultOption} disabled>{defaultOption}</option>
          {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
        </select>
        <div className={styles.arrowIcon}>
          <Icons.ArrowDownIcon color={borderColor} size={MEDIUM} />
        </div>
      </div>
      {showError && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </div>
  )

  return focused ? (<BorderedBox classes={styles.paddingFocused} color={MAIN_GREEN} backgroundColor={MAIN_GREEN} opaque={10}>{cmp}</BorderedBox>) : cmp
}

Select.propTypes = {
  /**
   * defaultOption
   */
  defaultOption: PropTypes.string,
  /**
   * name
   */
  name: PropTypes.string,
  /**
   * value
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  /**
   * color of border
   */
  borderColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE]),
  /**
   * onChange
   */
  onChange: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * addFocus
   */
  focused: PropTypes.bool
}

Select.defaultProps = {
  defaultOption: 'this is the default',
  name: '',
  id: '',
  options: [],
  borderColor: MAIN_GREEN,
  errorMessage: '',
  onChange: () => {},
  disabled: false,
  focused: false
}

export default Select
