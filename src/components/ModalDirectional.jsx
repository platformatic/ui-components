'use strict'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useEscapeKey from '../hooks/useEscapeKey'
import styles from './ModalDirectional.module.css'
import {
  ACTIVE_AND_INACTIVE_STATUS,
  RICH_BLACK,
  SMALL,
  WHITE
} from './constants'
import Button from './Button'

function ModalDirectional ({
  children = null,
  setIsOpen = () => {},
  title = '',
  titleClassName = '',
  smallLayout = false,
  classNameModalLefty = '',
  permanent = false,
  blurClassName = ''
}) {
  const className = `${styles.container} ${styles.modalLeftCover} ${smallLayout ? styles.smallLayout : styles.normalLayout}`
  const [modalClassName] = useState(className)
  const [variantModalClassName, setVariantModalClassName] = useState(`${styles.container} ${styles.modalLeftCover}`)
  const classNameLefty = classNameModalLefty || styles.modalLefty

  useEffect(() => {
    setVariantModalClassName(`${modalClassName} ${styles.modalLeftCoverEntering}`)
  }, [])

  useEscapeKey(() => closeModal())

  function closeModal () {
    setVariantModalClassName(`${modalClassName} ${styles.modalLeftCoverLeaving}`)
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  return (
    <>
      <div className={blurClassName || styles.blur} onClick={() => permanent ? {} : closeModal()} />
      <div className={variantModalClassName}>
        <div className={classNameLefty}>
          <div className={styles.headerClassName}>
            <Button
              color={WHITE}
              backgroundColor={RICH_BLACK}
              onClick={() => closeModal()}
              hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
              bordered={false}
              platformaticIcon={{
                iconName: 'ArrowLongLeftIcon',
                size: SMALL,
                color: WHITE
              }}
              label={title}
              textClass={titleClassName}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

ModalDirectional.propTypes = {
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * setIsOpen
   */
  setIsOpen: PropTypes.func,
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * title
   */
  titleClassName: PropTypes.string,
  /**
   * smallLayout
   */
  smallLayout: PropTypes.bool,
  /**
   * classNameModalLefty
   */
  classNameModalLefty: PropTypes.string,
  /**
   * permanent: modal could be closed only with Esc, X or Cancel
   */
  permanent: PropTypes.bool,
  /**
   * blurClassName: override
   */
  blurClassName: PropTypes.string
}

export default ModalDirectional
