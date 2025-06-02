import React from 'react'
import styles from './Preview.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import CopyAndPaste from '../CopyAndPaste'
import {} from '../constants'

function renderLink (value) {
  return (<a className={styles.link} href={value} target='_blank' rel='noreferrer'>{value}</a>)
}

function renderParagraph (value, useCopyAndPaste, copyAndPaste, usePlatformaticIcon, platformaticIcon) {
  return (
    <>
      <p className={styles.value}>
        {value}
        {useCopyAndPaste && (<CopyAndPaste {...copyAndPaste} />)}
        {usePlatformaticIcon && (<PlatformaticIcon {...platformaticIcon} />)}
      </p>
    </>
  )
}
function Preview ({
  title = '',
  value = '',
  isLink = false,
  children,
  useCopyAndPaste = false,
  copyAndPaste = null,
  platformaticIcon = null,
  usePlatformaticIcon = false
}) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {isLink ? renderLink(value) : renderParagraph(value, useCopyAndPaste, copyAndPaste, usePlatformaticIcon, platformaticIcon)}
      </div>
      {children}
    </>
  )
}

export default Preview
