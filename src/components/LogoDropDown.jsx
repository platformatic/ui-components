'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './LogoDropDown.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { MAIN_DARK_BLUE, SMALL, WHITE } from './constants'
import Logo from './Logo'
function LogoDropDown ({ itemSelected, items, width, height }) {
  const [open, setOpen] = useState(false)

  function handleOpen () {
    setOpen(!open)
  }

  return (
    <div className={styles.container}>
      <div className={styles.dropDown}>
        <div className={styles.logoContainer}>
          <Logo width={width} height={height} color={WHITE} fillColor={MAIN_DARK_BLUE} />
        </div>
        <div className={styles.selectorContainer} style={{ left: width / 2, paddingLeft: width / 2, width: `calc(100% - ${width / 2}px)` }} onClick={() => handleOpen()}>
          <span className={styles.header}>{itemSelected}</span>
          {!open && <PlatformaticIcon iconName='ArrowDownIcon' color={MAIN_DARK_BLUE} onClick={null} />}
          {open && <PlatformaticIcon iconName='ArrowUpIcon' color={MAIN_DARK_BLUE} onClick={null} />}
        </div>
      </div>
      {open && (
        <div className={styles.menuContainer}>
          <div className={styles.menu} style={{ width: `calc(100% - ${width}px)` }}>
            {items.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <PlatformaticIcon iconName='OrganizationIcon' color={MAIN_DARK_BLUE} size={SMALL} onClick={handleOpen} /> {item}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

LogoDropDown.propTypes = {
  /**
   * width
   */
  width: PropTypes.number,
  /**
   * height
   */
  height: PropTypes.number,
  /**
   * itemSelected
   */
  itemSelected: PropTypes.string,
  /**
   * items
   */
  items: PropTypes.array
}

LogoDropDown.defaultProps = {
  width: 107,
  height: 86,
  itemSelected: '',
  items: []
}
export default LogoDropDown
