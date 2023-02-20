import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preview.module.css'
import HorizontalSeparator from '../HorizontalSeparator'
import PlatformaticIcon from '../PlatformaticIcon'

function renderLink (value) {
  return (<a className={styles.link} href={value} target='_blank' rel='noreferrer'>{value}</a>)
}

function renderParagraph (value, afterValueIcon, afterValueIconColor, onClickAfterValueIcon) {
  return (
    <>
      <p className={styles.value}>
        {value}
        {afterValueIcon && (<PlatformaticIcon iconName={afterValueIcon} color={afterValueIconColor} classes={styles.afterIcon} onClick={() => onClickAfterValueIcon} />)}
      </p>
    </>
  )
}
function Preview ({ title, value, isLink, children, afterValueIcon, afterValueIconColor, onClickAfterValueIcon }) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {isLink ? renderLink(value) : renderParagraph(value, afterValueIcon, afterValueIconColor, onClickAfterValueIcon)}
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
   * afterValueIcon
   */
  afterValueIcon: PropTypes.string,
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
