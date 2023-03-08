import React, { useState } from 'react'
import useEscapeKey from '../hooks/useEscapeKey'
import CloseIcon from './icons/CloseIcon'
import CircleCloseIcon from './icons/CircleCloseIcon'
import CircleCloseHoverIcon from './icons/CircleCloseHoverIcon'
import Logo from './Logo'
import styles from './Modal.module.css'

export default function Modal (props) {
  const { setIsOpen, title, layout = 'info' } = props
  const [isHoverCloseModal, setIsHoverCloseModal] = useState(false)
  useEscapeKey(() => setIsOpen(false))
  let whichModal = <></>

  switch (layout) {
    case 'info':
      whichModal = (
        <>
          <div className={styles.blur} onClick={() => setIsOpen(false)} />
          <div className={`${styles.container} ${styles.centered}`}>
            <div className={`${styles.modal} ${styles.modalInfo}`}>
              <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.close} onClick={() => setIsOpen(false)}>
                  <CloseIcon size='small' />
                </div>
              </div>
              <div>
                {props.children}
              </div>
            </div>
          </div>
        </>
      )
      break

    case 'invite':
      whichModal = (
        <>
          <div className={styles.blur} onClick={() => setIsOpen(false)} />
          <div className={`${styles.container} ${styles.centered}`}>
            <div className={`${styles.modal} ${styles.modalInvite}`}>
              <div className={styles.headerInvite}>
                <div
                  className={styles.close}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setIsHoverCloseModal(true)}
                  onMouseLeave={() => setIsHoverCloseModal(false)}
                >
                  {isHoverCloseModal ? <CircleCloseHoverIcon /> : <CircleCloseIcon />}
                </div>
              </div>
              <p className={styles.titleInvite}>{title}</p>
              <div>{props.children}</div>
            </div>
          </div>
        </>
      )
      break

    case 'fullscreen':
      whichModal = (
        <>
          <div className={`${styles.container} ${styles.fullscreen}`}>
            <div className={styles.modalFullscreen}>
              <div className={styles.headerInvite}>
                <div
                  className={styles.close}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setIsHoverCloseModal(true)}
                  onMouseLeave={() => setIsHoverCloseModal(false)}
                >
                  {isHoverCloseModal ? <CircleCloseHoverIcon color='main-dark-blue' /> : <CircleCloseIcon color='main-dark-blue' />}
                </div>
              </div>
              <div className={styles.contentFullscreen}>
                <div className={styles.titleFullscreen}>
                  <Logo width={100} heigth={80} color='main-dark-blue' />
                  <h3>PLATFORMATIC</h3>
                </div>
                <div>{props.children}</div>
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
