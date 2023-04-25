'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './DropDown.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { LIGHT_BLUE, MAIN_DARK_BLUE, WHITE } from './constants'
function DropDown ({ pictureUrl, header, items, align, backgroundColor, textColor, borderColor }) {
  const [open, setOpen] = useState(false)

  let classNameMenu = `${styles.menu} `
  classNameMenu += commonStyles[`background-color-${backgroundColor}`]
  classNameMenu += ' ' + commonStyles[`bordered--${borderColor}`]

  let classNameItem = `${styles.item} `
  classNameItem += commonStyles[`text--${textColor}`]

  let headerClassNamme = `${styles.header} `
  headerClassNamme += commonStyles[`text--${borderColor}`]

  function handleOpen () {
    setOpen(!open)
  }

  return (
    <div className={`${styles.dropDown} ${styles[align]}`}>
      <span className={headerClassNamme} onClick={handleOpen}>
        {pictureUrl && <img src={pictureUrl} height={32} width={32} className={styles.picture} />}
        {header}
        {!open && <div className={styles.arrow}><PlatformaticIcon iconName='ArrowRightIcon' color={borderColor} onClick={null} /></div>}
        {open && <div className={styles.arrow}><PlatformaticIcon iconName='ArrowDownIcon' color={borderColor} onClick={null} /></div>}
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
  backgroundColor: PropTypes.oneOf([MAIN_DARK_BLUE, LIGHT_BLUE]),
  /**
   * textColor
   */
  textColor: PropTypes.oneOf([MAIN_DARK_BLUE, LIGHT_BLUE]),
  /**
   * borderColor
   */
  borderColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE])
}

DropDown.defaultProps = {
  pictureUrl: '',
  header: '',
  align: 'left',
  items: [],
  backgroundColor: LIGHT_BLUE,
  textColor: MAIN_DARK_BLUE,
  borderColor: WHITE
}
export default DropDown
