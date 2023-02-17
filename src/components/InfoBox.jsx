'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './InfoBox.module.css'
import Button from './Button'
import Icons from './icons'

function renderItemIcon (iconName, color) {
  if (iconName) {
    return React.createElement(Icons[`${iconName}`], {
      size: 'extra-large',
      color
    })
  }
  return (<></>)
}

function InfoBox ({ children, iconLogo, helpText, buttonProps }) {
  return (
    <div className={styles.container}>
      {renderItemIcon(iconLogo)}
      {children}
      <p className={styles.helpText}>{helpText}</p>
      {buttonProps && (<Button type='button' size='extra-large' label={buttonProps.label} color={buttonProps.color} backgroundColor={buttonProps.backgroundColor} onClick={() => buttonProps.onClick()} fullWidth />)}
    </div>
  )
}

InfoBox.propTypes = {
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * iconLogo
   */
  iconLogo: PropTypes.string,
  /**
   * helpText
   */
  helpText: PropTypes.string,
  /**
   * background color of the button
   */
  buttonProps: PropTypes.shape({
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  })
}

InfoBox.defaultProps = {
  children: null,
  iconLogo: null,
  helpText: null,
  buttonProps: null
}

export default InfoBox
