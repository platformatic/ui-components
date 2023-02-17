import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preview.module.css'
import HorizontalSeparator from '../HorizontalSeparator'
import Icons from '../icons'

function renderItemIcon (iconName, color) {
  if (iconName) {
    return React.createElement(Icons[`${iconName}`], {
      color,
      size: 'small'
    })
  }
  return (<></>)
}

function renderLink (value) {
  return (<a className={styles.link} href={value} target='_blank' rel='noreferrer'>{value}</a>)
}

function renderParagraph (value, afterValueIcon, afterValueColor, onClickAfterValueIcon) {
  return (
    <>
      <p className={styles.value}>
        {value}
        {afterValueIcon && (<span className={styles.afterIcon} onClick={onClickAfterValueIcon}>{renderItemIcon(afterValueIcon, afterValueColor)}</span>)}
      </p>
    </>
  )
}
function Preview ({ title, value, isLink, children, afterValueIcon, afterValueColor, onClickAfterValueIcon }) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {isLink ? renderLink(value) : renderParagraph(value, afterValueIcon, afterValueColor, onClickAfterValueIcon)}
      </div>
      {children}
      <HorizontalSeparator color='main-dark-green' opacity={20} marginBottom={10} marginTop={10} />
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
  value: PropTypes.string,
  /**
   * isLink
   */
  isLink: PropTypes.bool,
  /**
   * color of border
   */
  children: PropTypes.node,
  /**
   * afterValueIcon
   */
  afterValueIcon: PropTypes.object,
  /**
   * afterValueIconColor
   */
  afterValueIconColor: PropTypes.oneOf(['error-red', 'main-dark-blue', 'white']),
  /**
   * onClickAfterValueIcon
   */
  onClickAfterValueIcon: PropTypes.func
}

Preview.defaultProps = {
  title: '',
  value: '',
  isLink: false,
  afterValueIconColor: 'main-dark-blue',
  afterValueIcon: null,
  onClickAfterValueIcon: () => {}
}

export default Preview
