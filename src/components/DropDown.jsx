'use strict'

import React, { useState } from 'react'
import styles from './DropDown.module.css'
import PlatformaticIcon from './PlatformaticIcon'
export default function DropDown (props) {
  const { pictureUrl, header, items, align = 'left' } = props
  const [open, setOpen] = useState(false)
  function handleOpen () {
    setOpen(!open)
  }
  return (
    <div className={`${styles.dropDown} ${styles[align]}`}>
      <span className={styles.header} onClick={handleOpen}>
        {pictureUrl && <img src={pictureUrl} height={32} width={32} className={styles.picture} />}
        {header}
        {!open && <div className={styles.arrow}><PlatformaticIcon iconName='ArrowRightIcon' color='white' onClick={null} /></div>}
        {open && <div className={styles.arrow}><PlatformaticIcon iconName='ArrowDownIcon' color='white' onClick={null} /></div>}
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
