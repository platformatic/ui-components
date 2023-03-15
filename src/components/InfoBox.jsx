'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './InfoBox.module.css'
import Button from './Button'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_BUTTON, COLORS_ICON } from './constants'

function InfoBox ({ children, iconName, iconColor, helpText, buttonProps }) {
  return (
    <div className={styles.container}>
      <PlatformaticIcon size='extra-large' iconName={iconName} color={iconColor} />
      {children}
      <p className={styles.helpText}>{helpText}</p>
      {buttonProps && (<Button type='button' size='extra-large' label={buttonProps.label} color={buttonProps.color} backgroundColor={buttonProps.backgroundColor} onClick={() => buttonProps.onClick()} fullWidth bold />)}
    </div>
  )
}

InfoBox.propTypes = {
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * iconName
   */
  iconName: PropTypes.string,
  /**
   * iconColor
   */
  iconColor: PropTypes.oneOf(COLORS_ICON),
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
    color: PropTypes.oneOf(COLORS_BUTTON),
    onClick: PropTypes.func
  })
}

InfoBox.defaultProps = {
  children: null,
  iconName: '',
  iconColor: 'main-green',
  helpText: '',
  buttonProps: null
}

export default InfoBox
