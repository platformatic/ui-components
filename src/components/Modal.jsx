import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useEscapeKey from '../hooks/useEscapeKey'
import styles from './Modal.module.css'
export default function Modal (props) {
  const { setIsOpen, title } = props
  useEscapeKey(() => setIsOpen(false))
  return (
    <>
      <div className={styles.blur} onClick={() => setIsOpen(false)} />
      <div className={`${styles.container} ${styles.centered}`}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.close} onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>
          <hr className={styles.hr} />
          <div>
            {props.children}
          </div>
        </div>
      </div>
    </>

  )
}
