import React from 'react'
import styles from './Field.module.css'
import { MAIN_DARK_BLUE } from '../constants'

function Field ({
  title = '',
  titleColor = MAIN_DARK_BLUE,
  helper = '',
  children,
  disabled = false,
  required = false,
  titleClassName = '',
  helperClassName = ''
}) {
  let className = `${styles.container}`
  if (disabled) className += ` ${styles.disabled}`
  const styledTitle = titleClassName || (`${styles.title} ` + styles[`text-color-${titleColor}`])
  const styledHelper = helperClassName || styles.helper
  let titleTmp = title
  if (required) { titleTmp += ' *' }

  return (
    <div className={className}>
      <p className={styledTitle}>{titleTmp}</p>
      {helper && <p className={styledHelper}>{helper}</p>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Field
