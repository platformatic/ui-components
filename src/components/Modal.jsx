'use strict'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import ButtonFullRounded from './ButtonFullRounded'
import useEscapeKey from '../hooks/useEscapeKey'
import Logo from './Logo'
import Logos from './logos'
import styles from './Modal.module.css'
import commonStyles from './Common.module.css'
import {
  MODAL_SIZES,
  SMALL,
  MODAL_LAYOUTS,
  MODAL_COVER,
  MODAL_POPUP,
  MODAL_POPUP_V2,
  MAIN_DARK_BLUE,
  DULLS_BACKGROUND_COLOR,
  LARGE,
  PROFILES,
  FREE,
  BASIC,
  MODAL_FULL_DARK,
  MODAL_FULL_LIGHT,
  MODAL_FULL_RICH_BLACK,
  MODAL_FULL_RICH_BLACK_V2,
  WHITE,
  RICH_BLACK,
  MEDIUM
} from './constants'
import PlatformaticIcon from './PlatformaticIcon'

function Modal ({
  setIsOpen = () => {},
  title = '',
  layout = MODAL_POPUP,
  children = null,
  size = SMALL,
  profile = '',
  backgroundClassName = '',
  titleClassName = '',
  childrenClassContainer = '',
  modalCloseClassName = '',
  permanent = false
}) {
  let contentFullscreen
  let titleFullscreen
  let modalClassName = `${styles.modal}`
  modalClassName += ' ' + styles[`modal--${layout}`]
  modalClassName += ' ' + styles[`modal--${size}`]
  let buttonFullRoundedClassName
  const blurRef = useRef()

  const headerClassName = styles[`header--${layout}`]
  let modalCoverClassName = `${styles.container} ${styles.fullscreen} `
  switch (layout) {
    case MODAL_COVER:
      contentFullscreen = styles[`content--${layout}`]
      titleFullscreen = styles[`title--${layout}`]
      buttonFullRoundedClassName = `${styles['close--cover']} `
      buttonFullRoundedClassName += commonStyles['background-color-light-blue']
      modalCoverClassName += commonStyles['background-color-light-blue']
      break

    case MODAL_FULL_DARK:
      modalCoverClassName += commonStyles['background-color-main-dark-blue']
      modalCoverClassName += ` ${backgroundClassName}`
      break

    case MODAL_FULL_LIGHT:
      modalCoverClassName += commonStyles['background-color-light-blue']
      break

    case MODAL_FULL_RICH_BLACK:
    case MODAL_FULL_RICH_BLACK_V2:
      contentFullscreen = childrenClassContainer || styles[`content--${layout}`]
      modalCoverClassName += commonStyles[`background-color-${RICH_BLACK}`]
      modalCoverClassName += ` ${backgroundClassName}`
      buttonFullRoundedClassName = `${styles['close--cover']} `
      buttonFullRoundedClassName += commonStyles[`background-color-${RICH_BLACK}`]
      break

    default:
      break
  }
  useEscapeKey(() => setIsOpen(false))
  let whichModal = <></>

  function renderLogo () {
    if (profile === FREE) {
      return <Logos.FreeLogo width={143} height={63} />
    }
    if (profile === BASIC) {
      return <Logos.BasicLogo width={143} height={63} />
    }
    return <Logo width={100} heigth={80} color={MAIN_DARK_BLUE} />
  }

  function closeModal (event) {
    if (event.target === blurRef.current) {
      event.preventDefault()
      event.stopPropagation()
      setIsOpen(false)
    }
  }

  switch (layout) {
    case MODAL_POPUP_V2:
      whichModal = (

        <div className={`${styles['blur-fixed']}`} onClick={(event) => permanent ? {} : closeModal(event)} ref={blurRef}>
          <div className={styles.content}>
            <div className={modalClassName}>
              <div className={headerClassName}>
                <div className={titleClassName}>{title}</div>
                <PlatformaticIcon
                  iconName='CloseIcon'
                  color={WHITE}
                  size={SMALL}
                  onClick={() => setIsOpen(false)}
                  internalOverHandling
                />
              </div>
              <div>
                {children}
              </div>
            </div>
          </div>
        </div>

      )
      break
    case MODAL_POPUP:
      whichModal = (
        <>
          <div className={styles.blur} onClick={() => permanent ? {} : setIsOpen(false)} />
          <div className={`${styles.container} ${styles.centered}`}>
            <div className={modalClassName}>
              <div className={headerClassName}>
                <div className={styles.title}>{title}</div>
                <PlatformaticIcon
                  iconName='CloseIcon'
                  color={MAIN_DARK_BLUE}
                  size={SMALL}
                  onClick={() => setIsOpen(false)}
                  internalOverHandling
                />
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
        <div className={modalCoverClassName}>
          <div className={headerClassName}>
            <ButtonFullRounded
              buttonClassName={buttonFullRoundedClassName}
              iconName='CircleCloseIcon'
              iconSize={LARGE}
              iconColor={MAIN_DARK_BLUE}
              hoverEffect={DULLS_BACKGROUND_COLOR}
              onClick={() => { setIsOpen(false) }}
              bordered={false}
              alt='Close'
            />
          </div>
          <div className={contentFullscreen}>
            <div className={titleFullscreen}>
              {renderLogo()}
            </div>
            <div>{children}</div>
          </div>
        </div>
      )
      break

    case MODAL_FULL_LIGHT:
    case MODAL_FULL_DARK:
      whichModal = (
        <div className={modalCoverClassName}>
          <div className={headerClassName}>
            <ButtonFullRounded
              className={buttonFullRoundedClassName}
              iconName='CircleCloseIcon'
              iconSize={LARGE}
              iconColor={layout === MODAL_FULL_LIGHT ? MAIN_DARK_BLUE : WHITE}
              hoverEffect={DULLS_BACKGROUND_COLOR}
              onClick={() => { setIsOpen(false) }}
              bordered={false}
              alt='Close'
            />
          </div>
          <div className={contentFullscreen}>
            <div>{children}</div>
          </div>
        </div>
      )
      break

    case MODAL_FULL_RICH_BLACK:
      whichModal = (
        <div className={modalCoverClassName}>
          <div className={headerClassName}>
            <ButtonFullRounded
              buttonClassName={buttonFullRoundedClassName}
              iconName='CircleCloseIcon'
              iconSize={LARGE}
              iconColor={WHITE}
              hoverEffect={DULLS_BACKGROUND_COLOR}
              onClick={() => { setIsOpen(false) }}
              bordered={false}
              alt='Close'
            />
          </div>
          <div className={contentFullscreen}>
            <div className={titleFullscreen}>
              <Logo width={70} heigth={56} color={WHITE} />
            </div>
            <div>{children}</div>
          </div>
        </div>
      )
      break

    case MODAL_FULL_RICH_BLACK_V2:
      whichModal = (
        <div className={modalCoverClassName}>
          <div className={modalCloseClassName || buttonFullRoundedClassName}>
            <PlatformaticIcon
              iconName='CloseIcon'
              color={WHITE}
              size={MEDIUM}
              onClick={() => setIsOpen(false)}
              internalOverHandling
            />
          </div>
          <div className={contentFullscreen}>
            {children}
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
   * childrenClassContainer
   */
  childrenClassContainer: PropTypes.string,
  /**
   * setIsOpen: function from Parent for close/pen
   */
  setIsOpen: PropTypes.func,
  /**
   * title: Title on top for small Modals (check MODAL_LAYOUTS)
   */
  title: PropTypes.string,
  /**
   * layout: type of Layout of the modal
   */
  layout: PropTypes.oneOf(MODAL_LAYOUTS),
  /**
   * Size: of the modal
   */
  size: PropTypes.oneOf(MODAL_SIZES),
  /**
   * profile: deprecated
   */
  profile: PropTypes.oneOf(PROFILES),
  /**
   * backgroundClassName: background of the full screen modal
   */
  backgroundClassName: PropTypes.string,
  /**
   * titleClassName: classes of the title
   */
  titleClassName: PropTypes.string,
  /**
   * modalCloseClassName: classes for the closing icon
   */
  modalCloseClassName: PropTypes.string,
  /**
   * permanent: modal could be closed only with Esc, X or Cancel
   */
  permanent: PropTypes.bool
}

export default Modal
