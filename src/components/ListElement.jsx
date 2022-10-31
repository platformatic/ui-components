import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import styles from './ListElement.module.css'
export default function List ({ title, detail }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconCol}>
        <div data-testid='list-element-title-icon' className={styles.icon}>
          <FontAwesomeIcon icon={faCircleCheck} /> 
        </div>
      </div>
      <div className={styles.textCol}>
        <div className={styles.title} data-testid='list-element-title'>
          {title}
        </div>
        <div data-test-id='list-element-detail'>
          {detail}
        </div>
      </div>
    </div>
  )
}
