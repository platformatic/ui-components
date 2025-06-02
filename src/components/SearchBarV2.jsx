import React, { useRef, useState } from 'react'
import commonStyles from './Common.module.css'
import styles from './SearchBarV2.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { RICH_BLACK, SMALL, TRANSPARENT, WHITE } from './constants'
function SearchBarV2 ({
  color = WHITE,
  backgroundColor = RICH_BLACK,
  onSubmit = () => { },
  onChange = () => { },
  onClear = () => { },
  placeholder = 'Search',
  dataAttrName = '',
  dataAttrValue = '',
  inputTextClassName = '',
  paddingClass = '',
  disabled = false
}) {
  const inputRef = useRef()
  const baseClassName = `${styles.container} ${paddingClass || styles.defaultPaddingClass} ` + commonStyles[`background-color-${backgroundColor}`]
  const [wrapperClassName, setWrapperClassName] = useState(normalClassName())
  const inputClassName = `${styles.input} ${inputTextClassName} ${disabled ? styles.disabled : ''} `
  const [isOnFocus, setIsOnFocus] = useState(false)
  const [showClear, setShowClear] = useState(false)
  const dataProps = {}
  if (dataAttrName && dataAttrValue) {
    dataProps[`data-${dataAttrName}`] = dataAttrValue
  }
  function handleSearch () {
    if (onSubmit) {
      const value = inputRef.current.value
      return onSubmit(value)
    }
  }

  function handleChange () {
    if (onChange) {
      const value = inputRef.current.value
      setShowClear(!!value)
      return onChange(value)
    }
  }

  function handleClear () {
    inputRef.current.value = ''
    setShowClear(false)
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
    return `${baseClassName} ${styles.onFocus}`
  }

  function normalClassName () {
    return `${baseClassName} ${styles.onBlur}`
  }

  return (
    <div className={wrapperClassName} {...dataProps}>
      <PlatformaticIcon iconName='LensIcon' color={color} disabled={!isOnFocus} size={SMALL} onClick={handleSearch} />
      <input
        type='text'
        placeholder={placeholder}
        className={inputClassName}
        ref={inputRef}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
      {showClear && (
        <div className={styles.clearContainer}>
          <PlatformaticIcon iconName='CircleCloseIcon' color={color} size={SMALL} onClick={handleClear} />
        </div>
      )}
    </div>
  )
}

export default SearchBarV2
