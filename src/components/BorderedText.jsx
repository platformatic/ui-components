'use strict'
import styles from './BorderedText.module.css'

export default function BorderedText (props) {
  return (
    <span className={styles.bordered}>{props.text}</span>
  )
}
