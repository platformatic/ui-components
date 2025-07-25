import React, { useEffect, useRef, useState } from 'react'
import styles from './DropDown.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { DARK_BLUE, MAIN_DARK_BLUE, RICH_BLACK, WHITE } from './constants'

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
  menuCustomClassName = '',
  handleClickOutside = false
}) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const borderClass = commonStyles[`bordered--${borderColor}-30`]

  useEffect(() => {
    if (open && handleClickOutside) {
      function innerHandleClickOutside (event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', innerHandleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', innerHandleClickOutside)
      }
    }
  }, [handleClickOutside, open])

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
    <div className={`${styles.dropDown} ${styles[align]}`} ref={wrapperRef}>
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

export default DropDown
