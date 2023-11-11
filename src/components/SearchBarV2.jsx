'use strict'
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './SearchBarV2.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { MEDIUM, WHITE } from './constants'
function SearchBarV2 ({ onSubmit, onChange, onClear, color, onFocusColor, placeholder }) {
  const inputRef = useRef()
  const [wrapperClassName, setWrapperClassName] = useState(normalClassName())
  const [isOnFocus, setIsOnFocus] = useState(false)

  function handleSearch () {
    if (onSubmit) {
      const value = inputRef.current.value
      return onSubmit(value)
    }
  }

  function handleChange () {
    if (onChange) {
      const value = inputRef.current.value
      return onChange(value)
    }
  }

  function handleClear () {
    inputRef.current.value = ''
    return onClear()
  }

  function onFocus () {
    if (!isOnFocus) {
      setIsOnFocus(true)
      setWrapperClassName(onFocusClassName())
    }
  }

  function onBlur () {
    setIsOnFocus(false)
    setWrapperClassName(normalClassName())
  }

  function onFocusClassName () {
    return `${styles.container} ${commonStyles.padded} ${styles.onFocus}`
  }

  function normalClassName () {
    return `${styles.container} ${commonStyles.padded} ${styles.onBlur}`
  }

  return (
    <div className={wrapperClassName}>
      <PlatformaticIcon iconName='LensIcon' color={isOnFocus ? onFocusColor : color} size={MEDIUM} onClick={handleSearch} />
      <input type='text' placeholder={placeholder} className={styles.input} ref={inputRef} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} />
      <div className={styles.clearContainer}>
        <PlatformaticIcon iconName='CircleCloseIcon' color={isOnFocus ? onFocusColor : color} size={MEDIUM} onClick={handleClear} />
      </div>
    </div>
  )
}

SearchBarV2.propTypes = {
  /**
   * onSubmit
   */
  onSubmit: PropTypes.func,
  /**
   * onSubmit
   */
  onChange: PropTypes.func,
  /**
   * onSubmit
   */
  onClear: PropTypes.func,
  /**
   * color
   */
  color: PropTypes.string,
  /**
   * onFocusColor
   */
  onFocusColor: PropTypes.string,
  /**
   * placeholder
   */
  placeholder: PropTypes.string
}

SearchBarV2.defaultProps = {
  color: WHITE,
  onFocusColor: WHITE,
  onSubmit: () => {},
  onChange: () => {},
  onClear: () => {},
  placeholder: 'Search'
}

export default SearchBarV2
