import React from 'react'
import PropTypes from 'prop-types'
import styles from './InfoBox.module.css'
import Button from './Button'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_BUTTON, COLORS_ICON, HOVER_EFFECTS_BUTTONS, MAIN_GREEN } from './constants'

function InfoBox (props) {
  const {
    children,
    iconName = '',
    iconColor = MAIN_GREEN,
    helpText = '',
    buttonProps = null
  } = props

  return (
    <div className={styles.container}>
      <PlatformaticIcon size='extra-large' iconName={iconName} color={iconColor} />
      {children}
      <p className={styles.helpText}>{helpText}</p>
      {buttonProps && (<Button type='button' size='extra-large' label={buttonProps.label} color={buttonProps.color} backgroundColor={buttonProps.backgroundColor} onClick={() => buttonProps.onClick()} fullWidth bold bordered={buttonProps.bordered} hoverEffect={buttonProps.hoverEffect} />)}
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
    hoverEffect: PropTypes.oneOf(HOVER_EFFECTS_BUTTONS),
    bordered: PropTypes.bool,
    onClick: PropTypes.func
  })
}

export default InfoBox
