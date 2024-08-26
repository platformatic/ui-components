'use strict'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useEscapeKey from '../hooks/useEscapeKey'
import styles from './ModalDirectional.module.css'
import {
  MEDIUM,
  WHITE
} from './constants'
import PlatformaticIcon from './PlatformaticIcon'

function ModalDirectional ({
  children = null,
  setIsOpen = () => {},
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
            <PlatformaticIcon
              color={WHITE}
              iconName='CloseIcon'
              size={MEDIUM}
              onClick={() => closeModal()}
              internalOverHandling
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
