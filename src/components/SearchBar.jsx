'use strict'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './SearchBar.module.css'
import commonStyles from './Common.module.css'
export default function SearchBar (props) {
  const inputRef = useRef()
  const { onSubmit, onChange } = props
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
  return (
    <div className={`${styles.input} ${commonStyles.padded}`}>
      <input type='text' placeholder='Search' className='grow' ref={inputRef} onChange={handleChange} />
      <button onClick={handleSearch}>
        <FontAwesomeIcon color='white' icon={faSearch} />
      </button>

    </div>

  )
}
