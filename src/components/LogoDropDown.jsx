'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './LogoDropDown.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { MAIN_DARK_BLUE, SMALL, WHITE } from './constants'
import Logo from './Logo'
function LogoDropDown ({ itemSelected, items, width, height, onClickItemSelected }) {
  const [open, setOpen] = useState(false)

  function handleOpen () {
    setOpen(!open)
  }

  function getItemsSelected () {
    return items.find(item => item.id === itemSelected)?.name
  }

  function onClick (callback) {
    handleOpen()
    callback()
  }

  return (
    <div className={styles.container}>
      <div className={styles.dropDown}>
        <div className={styles.logoContainer}>
          <Logo width={width} height={height} color={WHITE} fillColor={MAIN_DARK_BLUE} />
        </div>
        <div className={styles.selectorContainer} style={{ left: width / 2, paddingLeft: width / 3 }}>
          <p className={styles.header} onClick={() => onClickItemSelected()}>
            <span className={styles.itemSelected}>{getItemsSelected()}</span>
          </p>
          {items.length > 1 && (
            <div>
              {!open && <PlatformaticIcon iconName='ArrowDownIcon' color={MAIN_DARK_BLUE} onClick={() => handleOpen()} />}
              {open && <PlatformaticIcon iconName='ArrowUpIcon' color={MAIN_DARK_BLUE} onClick={() => handleOpen()} />}
            </div>)}
        </div>
      </div>
      {open && (
        <div className={styles.menuContainer}>
          <div className={styles.menu} style={{ width: `calc(100% - ${width}px)` }}>
            {items.map((item, index) => {
              return (
                <div className={styles.item} key={index} onClick={() => onClick(item.handleClick)}>
                  <PlatformaticIcon iconName='OrganizationIcon' color={MAIN_DARK_BLUE} size={SMALL} onClick={null} /><span className={styles.itemName}>{item.name}</span>
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
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    handleClick: PropTypes.func
  })),
  /**
   * onClickItemSelected
   */
  onClickItemSelected: PropTypes.func
}

LogoDropDown.defaultProps = {
  width: 71,
  height: 56,
  itemSelected: '',
  items: [],
  onClickItemSelected: () => {}
}
export default LogoDropDown
