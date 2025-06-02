import React from 'react'
import commonStyles from './Common.module.css'
import styles from './Tag.module.css'
import { COLORS_BUTTON, OPACITY_100, OPACITIES, SIZES, WHITE } from './constants'
import PlatformaticIcon from './PlatformaticIcon'

function Tag ({
  text = '',
  textClassName = '',
  color = WHITE,
  backgroundColor = '',
  bordered = true,
  opaque = OPACITY_100,
  fullRounded = false,
  platformaticIcon = null,
  paddingClass = ''
}) {
  const stylesColor = textClassName || commonStyles[`text--${color}`]
  let stylesBorderColor = ''
  if (bordered) {
    stylesBorderColor = `${styles.bordered} `
    stylesBorderColor += commonStyles[`bordered--${color}`]
  }
  if (fullRounded) {
    stylesBorderColor += ` ${styles.fullRounded}`
  }
  const stylesBackgroundColor = backgroundColor ? commonStyles[`background-color-${backgroundColor}`] : ''
  const opacity = commonStyles[`background-color-opaque-${opaque}`]
  let className = `${styles.container} ${styles.tag} ${stylesBorderColor} ${stylesBackgroundColor} ${opacity} `
  className += paddingClass || `${styles.padding} `

  return (
    <div className={className}>
      {platformaticIcon && <PlatformaticIcon iconName={platformaticIcon.iconName} color={platformaticIcon.color} size={platformaticIcon.size} onClick={null} />}
      <span className={stylesColor}>{text}</span>
    </div>
  )
}

export default Tag
