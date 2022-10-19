'use strict'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './SearchBar.module.css'
import commonStyles from './Common.module.css'
export default function SearchBar (props) {
  const inputRef = useRef()
  const { action } = props

  function handleSearch () {
    const value = inputRef.current.value
    return action(value)
  }
  return (
    <div className={`${styles.input} ${commonStyles.padded}`}>
      <input type='text' placeholder='Search' className='grow' ref={inputRef} />
      <button onClick={handleSearch}>
        <FontAwesomeIcon color='white' icon={faSearch} />
      </button>

    </div>

  )
}
