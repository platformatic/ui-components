'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './DropDown.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { DARK_BLUE, LIGHT_BLUE, MAIN_DARK_BLUE, WHITE } from './constants'
function DropDown ({ pictureUrl, header, items, align, backgroundColor, textColor, borderColor, headerColor, lastButton }) {
  const [open, setOpen] = useState(false)
  const borderClass = commonStyles[`bordered--${borderColor}-10`]

  let classNameMenu = `${styles.menu} `
  classNameMenu += commonStyles[`background-color-${backgroundColor}`]
  classNameMenu += ' ' + borderClass

  let classNameItem = `${styles.item} `
  classNameItem += commonStyles[`text--${textColor}`]

  if (backgroundColor === DARK_BLUE) {
    classNameItem += ' ' + styles[`hover--${WHITE}`]
  } else {
    classNameItem += ' ' + styles[`hover--${MAIN_DARK_BLUE}`]
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
        {header}
        {!open && <div className={styles.arrow}><PlatformaticIcon iconName='ArrowRightIcon' color={headerColor} onClick={null} /></div>}
        {open && <div className={styles.arrow}><PlatformaticIcon iconName='ArrowDownIcon' color={headerColor} onClick={null} /></div>}
      </span>
      {open && (
        <div className={classNameMenu}>
          {items.map((item, index) => {
            return (
              <div className={classNameItem} key={index}>
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
  backgroundColor: PropTypes.oneOf([DARK_BLUE, LIGHT_BLUE]),
  /**
   * textColor
   */
  textColor: PropTypes.oneOf([MAIN_DARK_BLUE, LIGHT_BLUE]),
  /**
   * borderColor
   */
  borderColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE]),
  /**
   * headerColor
   */
  headerColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE]),
  /**
   * lastButton
   */
  lastButton: PropTypes.node
}

DropDown.defaultProps = {
  pictureUrl: '',
  header: '',
  align: 'left',
  items: [],
  backgroundColor: DARK_BLUE,
  textColor: MAIN_DARK_BLUE,
  headerColor: WHITE,
  borderColor: WHITE,
  lastButton: null
}
export default DropDown
