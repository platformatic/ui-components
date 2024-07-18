'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './DropDown.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { DARK_BLUE, LIGHT_BLUE, MAIN_DARK_BLUE, RICH_BLACK, WHITE } from './constants'
function DropDown ({
  pictureUrl = '',
  header = '',
  headerClassName = '',
  align = 'left',
  items = [],
  backgroundColor = DARK_BLUE,
  textColor = MAIN_DARK_BLUE,
  headerColor = WHITE,
  borderColor = WHITE,
  lastButton = null,
  menuCustomClassName = ''
}) {
  const [open, setOpen] = useState(false)
  const borderClass = commonStyles[`bordered--${borderColor}-30`]

  let classNameMenu = `${styles.menu} `
  classNameMenu += commonStyles[`background-color-${backgroundColor}`]
  classNameMenu += ' ' + borderClass
  classNameMenu += ' ' + menuCustomClassName

  let classNameItem = `${styles.item} `
  classNameItem += commonStyles[`text--${textColor}`]

  switch (backgroundColor) {
    case DARK_BLUE:
    case RICH_BLACK:
      classNameItem += ' ' + styles[`hover--${WHITE}`]
      break
    default:
      classNameItem += ' ' + styles[`hover--${MAIN_DARK_BLUE}`]
      break
  }

  const lastButtonClassName = styles.lastButton + ' ' + borderClass

  let headerClassNamme = `${styles.header} `
  headerClassNamme += commonStyles[`text--${headerColor}`]

  function handleOpen () {
    setOpen(!open)
  }

  return (
    <div className={`${styles.dropDown} ${styles[align]}`}>
      <span className={headerClassNamme} onClick={handleOpen}>
        {pictureUrl && <img src={pictureUrl} height={32} width={32} className={styles.picture} />}
        {header && (<span className={headerClassName || styles.headerClassNameDefault}>{header}</span>)}
        {!open && <div className={styles.arrow}><PlatformaticIcon iconName='ArrowRightIcon' color={headerColor} onClick={null} /></div>}
        {open && <div className={styles.arrow}><PlatformaticIcon iconName='ArrowDownIcon' color={headerColor} onClick={null} /></div>}
      </span>
      {open && (
        <div className={classNameMenu}>
          {items.map((item, index) => {
            return (
              <div className={classNameItem} key={index} onClick={handleOpen}>
                {item}
              </div>
            )
          })}
          {lastButton ? (<div className={lastButtonClassName} key='last'>{lastButton}</div>) : <></>}
        </div>
      )}
    </div>
  )
}

DropDown.propTypes = {
  /**
   * pictureUrl
   */
  pictureUrl: PropTypes.string,
  /**
   * header
   */
  header: PropTypes.string,
  /**
   * headerClassName
   */
  headerClassName: PropTypes.string,
  /**
   * align
   */
  align: PropTypes.string,
  /**
   * items
   */
  items: PropTypes.array,
  /**
   * backgroundColor
   */
  backgroundColor: PropTypes.oneOf([DARK_BLUE, LIGHT_BLUE, RICH_BLACK]),
  /**
   * textColor
   */
  textColor: PropTypes.oneOf([MAIN_DARK_BLUE, LIGHT_BLUE, WHITE]),
  /**
   * borderColor
   */
  borderColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE, RICH_BLACK]),
  /**
   * headerColor
   */
  headerColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE, RICH_BLACK]),
  /**
   * lastButton
   */
  lastButton: PropTypes.node,
  /**
   * menuCustomClassName
   */
  menuCustomClassName: PropTypes.string
}

export default DropDown
