import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preview.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import CopyAndPaste from '../CopyAndPaste'
import { SIZES, COLORS_ICON } from '../constants'

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
  children = null,
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

Preview.propTypes = {
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * value
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /**
   * isLink
   */
  isLink: PropTypes.bool,
  /**
   * color of border
   */
  children: PropTypes.node,
  /**
   * useCopyAndPaste
   */
  useCopyAndPaste: PropTypes.bool,
  /**
   * copyAndPaste
   */
  copyAndPaste: PropTypes.shape({
    value: PropTypes.string,
    tooltipLabel: PropTypes.string,
    iconSize: PropTypes.oneOf(SIZES),
    iconColor: PropTypes.oneOf(COLORS_ICON),
    timeout: PropTypes.number
  }),
  /**
   * usePlatformaticIcon
   */
  usePlatformaticIcon: PropTypes.bool,
  /**
   * platformaticIcon
   */
  platformaticIcon: PropTypes.shape({
    iconName: PropTypes.string.isRequired,
    color: PropTypes.oneOf(COLORS_ICON),
    size: PropTypes.oneOf(SIZES),
    onClick: PropTypes.func
  })
}

export default Preview
