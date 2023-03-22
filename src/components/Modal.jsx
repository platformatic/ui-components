'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import useEscapeKey from '../hooks/useEscapeKey'
import CloseIcon from './icons/CloseIcon'
import CircleCloseIcon from './icons/CircleCloseIcon'
import CircleCloseHoverIcon from './icons/CircleCloseHoverIcon'
import Logo from './Logo'
import styles from './Modal.module.css'
import { MODAL_SIZES, SMALL, MODAL_LAYOUTS, MODAL_COVERING, MODAL_POPUP, MAIN_DARK_BLUE } from './constants'

function Modal ({ setIsOpen, title, layout, children, size }) {
  const [isHoverCloseModal, setIsHoverCloseModal] = useState(false)
  let contentFullscreen
  let titleFullscreen
  let modalClassName = `${styles.modal}`
  modalClassName += ' ' + styles[`modal--${layout}`]
  modalClassName += ' ' + styles[`modal--${size}`]
  const headerClassName = styles[`header--${layout}`]
  if (MODAL_COVERING === layout) {
    contentFullscreen = styles[`content--${layout}`]
    titleFullscreen = styles[`title--${layout}`]
  }

  useEscapeKey(() => setIsOpen(false))
  let whichModal = <></>

  switch (layout) {
    case MODAL_POPUP:
      whichModal = (
        <>
          <div className={styles.blur} onClick={() => setIsOpen(false)} />
          <div className={`${styles.container} ${styles.centered}`}>
            <div className={modalClassName}>
              <div className={headerClassName}>
                <div className={styles.title}>{title}</div>
                <div className={styles.close} onClick={() => setIsOpen(false)}>
                  <CloseIcon size={SMALL} />
                </div>
              </div>
              <div>
                {children}
              </div>
            </div>
          </div>
        </>
      )
      break

    case MODAL_COVERING:
      whichModal = (
        <>
          <div className={`${styles.container} ${styles.fullscreen}`}>
            <div className={modalClassName}>
              <div className={headerClassName}>
                <div
                  className={styles.close}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setIsHoverCloseModal(true)}
                  onMouseLeave={() => setIsHoverCloseModal(false)}
                >
                  {isHoverCloseModal ? <CircleCloseHoverIcon color={MAIN_DARK_BLUE} /> : <CircleCloseIcon color={MAIN_DARK_BLUE} />}
                </div>
              </div>
              <div className={contentFullscreen}>
                <div className={titleFullscreen}>
                  <Logo width={100} heigth={80} color={MAIN_DARK_BLUE} />
                  <h3>PLATFORMATIC</h3>
                </div>
                <div>{children}</div>
              </div>
            </div>
          </div>
        </>
      )
      break

    default:
      break
  }
  return whichModal
}

Modal.propTypes = {
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
   * layout
   */
  layout: PropTypes.oneOf(MODAL_LAYOUTS),
  /**
   * Size
   */
  size: PropTypes.oneOf(MODAL_SIZES)
}

Modal.defaultProps = {
  children: null,
  setIsOpen: () => {},
  title: '',
  layout: MODAL_POPUP,
  size: SMALL
}

export default Modal
