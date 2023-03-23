'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import ButtonFullRounded from './ButtonFullRounded'
import useEscapeKey from '../hooks/useEscapeKey'
import CloseIcon from './icons/CloseIcon'
import Logo from './Logo'
import styles from './Modal.module.css'
import commonStyles from './Common.module.css'
import { MODAL_SIZES, SMALL, MODAL_LAYOUTS, MODAL_COVER, MODAL_POPUP, MAIN_DARK_BLUE, BACKGROUND_COLOR_OPAQUE, LARGE } from './constants'

function Modal ({ setIsOpen, title, layout, children, size }) {
  let contentFullscreen
  let titleFullscreen
  let modalClassName = `${styles.modal}`
  modalClassName += ' ' + styles[`modal--${layout}`]
  modalClassName += ' ' + styles[`modal--${size}`]

  let buttonFullRoundedClassName

  const headerClassName = styles[`header--${layout}`]
  if (MODAL_COVER === layout) {
    contentFullscreen = styles[`content--${layout}`]
    titleFullscreen = styles[`title--${layout}`]
    buttonFullRoundedClassName = `${styles['close--cover']} `
    buttonFullRoundedClassName += commonStyles['background-color-light-blue']
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

    case MODAL_COVER:
      whichModal = (
        <div className={`${styles.container} ${styles.fullscreen}`}>
          <div className={headerClassName}>
            <ButtonFullRounded
              className={buttonFullRoundedClassName}
              iconName='CircleCloseIcon'
              iconSize={LARGE}
              iconColor={MAIN_DARK_BLUE}
              hoverEffect={BACKGROUND_COLOR_OPAQUE}
              onClick={() => { setIsOpen(false) }}
              bordered={false}
              alt='Close'
            />
          </div>
          <div className={contentFullscreen}>
            <div className={titleFullscreen}>
              <Logo width={100} heigth={80} color={MAIN_DARK_BLUE} />
              <h3>PLATFORMATIC</h3>
            </div>
            <div>{children}</div>
          </div>
        </div>
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
