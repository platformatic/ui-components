import React, { useState } from 'react'
import useEscapeKey from '../hooks/useEscapeKey'
import CloseModalIcon from './icons/CloseModalIcon'
import CloseModalGreenIcon from './icons/CloseModalGreenIcon'
import CloseModalGreenHoverIcon from './icons/CloseModalGreenHoverIcon'
import styles from './Modal.module.css'
export default function Modal (props) {
  const { setIsOpen, title, layout = 'info' } = props
  const [isHoverCloseModal, setIsHoverCloseModal] = useState(false)
  useEscapeKey(() => setIsOpen(false))
  console.log(layout)

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
                  <CloseModalIcon />
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
              <p className={styles.headerInvite}>
                <div
                  className={styles.close}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setIsHoverCloseModal(true)}
                  onMouseLeave={() => setIsHoverCloseModal(false)}
                >
                  {isHoverCloseModal ? <CloseModalGreenHoverIcon /> : <CloseModalGreenIcon />}
                </div>
              </p>
              <p className={styles.titleInvite}>{title}</p>
              <div>{props.children}</div>
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
