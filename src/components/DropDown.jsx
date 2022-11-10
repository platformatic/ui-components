'use strict'

import React, { useState } from 'react'
import styles from './DropDown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default function DropDown (props) {
  const { header, items, align = 'left' } = props
  const [open, setOpen] = useState(false)
  function handleOpen () {
    setOpen(!open)
  }
  return (
    <div className={`${styles.dropDown} ${styles[align]}`}>
      <span className={styles.header} onClick={handleOpen}>
        {header}
        {!open && <FontAwesomeIcon className={styles.arrow} icon={faChevronLeft} />}
        {open && <FontAwesomeIcon className={styles.arrow} icon={faChevronDown} />}
      </span>
      {open && (
        <div className={styles.menu}>
          {items.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                {item}
              </div>
            )
          })}
        </div>
      )}

    </div>

  )
}
