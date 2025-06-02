import React from 'react'
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

export default InfoBox
