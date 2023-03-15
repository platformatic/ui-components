'use strict'
import React, { useRef, useState } from 'react'
import styles from './SearchBar.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
export default function SearchBar (props) {
  const inputRef = useRef()
  const [wrapperClassName, setWrapperClassName] = useState(normalClassName())
  const [isOnFocus, setIsOnFocus] = useState(false)
  const { onSubmit, onChange, title } = props

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
    return `${styles.input} ${commonStyles.padded} ${styles.onFocus}`
  }

  function normalClassName () {
    return `${styles.input} ${commonStyles.padded} ${styles.onBlur}`
  }

  return (
    <div>
      {title && <h1 className={styles.title}>{title}</h1>}
      <div className={wrapperClassName}>
        <input type='text' placeholder='Search' className='grow' ref={inputRef} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} />
        <button onClick={handleSearch} onFocus={onFocus} onBlur={onBlur}>
          <PlatformaticIcon iconName='LensIcon' color={isOnFocus ? 'main-green' : 'white'} size='medium' />
        </button>
      </div>
    </div>

  )
}
