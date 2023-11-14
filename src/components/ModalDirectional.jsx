'use strict'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useEscapeKey from '../hooks/useEscapeKey'
import styles from './ModalDirectional.module.css'
import {
  SMALL,
  WHITE
} from './constants'
import PlatformaticIcon from './PlatformaticIcon'

function ModalDirectional ({
  setIsOpen,
  title,
  titleClassName,
  children,
  smallLayout
}) {
  const className = `${styles.container} ${styles.modalLeftCover} ${smallLayout ? styles.smallLayout : styles.normalLayout}`
  const [modalClassName] = useState(className)
  const [variantModalClassName, setVariantModalClassName] = useState(`${styles.container} ${styles.modalLeftCover}`)

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
      <div className={styles.blur} onClick={() => closeModal()} />
      <div className={variantModalClassName}>
        <div className={styles.modalLefty}>
          <div className={styles.headerClassName}>
            <PlatformaticIcon iconName='ArrowLongLeftIcon' color={WHITE} size={SMALL} onClick={() => closeModal()} />
            <span className={titleClassName}>{title}</span>
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
  smallLayout: PropTypes.bool
}

ModalDirectional.defaultProps = {
  children: null,
  setIsOpen: () => {},
  title: '',
  titleClassName: '',
  smallLayout: false
}

export default ModalDirectional
