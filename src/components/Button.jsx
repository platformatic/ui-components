'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { SIZES, COLORS_BUTTON, BOX_SHADOW, UNDERLINE, HOVER_EFFECTS_BUTTONS, BACKGROUND_COLOR_OPAQUE } from './constants'

function Button (props) {
  const { icon, label, color, backgroundColor, size, disabled, bold, hoverEffect, bordered, fullWidth, platformaticIcon, ...rest } = props
  let className = `${styles.button} ${commonStyles['background-color-' + backgroundColor]} ${styles['color-' + color]} ${styles['button-' + size]}`
  if (!bordered) className += ` ${styles['no-border']}`
  if (disabled) {
    className += ` ${styles.disabled}`
  } else {
    switch (hoverEffect) {
      case BACKGROUND_COLOR_OPAQUE:
        className += ' ' + commonStyles[`hover-${BACKGROUND_COLOR_OPAQUE}-${color}`]
        break
      case BOX_SHADOW:
        className += ' ' + styles[`hover-${BOX_SHADOW}-${backgroundColor}`]
        break
      case UNDERLINE:
        className += ` ${styles['underline-effect']}`
        break
      default:
        break
    }
  }
  if (bold) className += ` ${styles.fontBold}`
  if (fullWidth) className += ` ${styles.fullWidth}`
  return (
    <button className={className} disabled={disabled} alt={label} {...rest}>
      {platformaticIcon ? <PlatformaticIcon iconName={platformaticIcon.iconName} color={platformaticIcon.color} data-testid='button-icon' onClick={null} /> : null}
      <span>{label}</span>
    </button>
  )
}

Button.propTypes = {
  /**
   * Icon
   */
  icon: PropTypes.object,
  /**
   * label
   */
  label: PropTypes.string,
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_BUTTON),
  /**
   * background color of the button
   */
  backgroundColor: PropTypes.oneOf(COLORS_BUTTON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * Bold
   */
  bold: PropTypes.bool,
  /**
   * Effect on hover
   */
  hoverEffect: PropTypes.oneOf(HOVER_EFFECTS_BUTTONS),
  /**
   * Apply border: default true
   */
  bordered: PropTypes.bool,
  /**
   * Full Width: default false
   */
  fullWidth: PropTypes.bool,
  /**
   * platformaticIcon: should be removed once we use totally our icons
   */
  platformaticIcon: PropTypes.shape({
    iconName: PropTypes.string,
    color: PropTypes.string
  })
}

Button.defaultProps = {
  label: '',
  color: 'main-dark-blue',
  backgroundColor: 'transparent',
  disabled: false,
  size: 'large',
  bold: false,
  hoverEffect: 'hover',
  bordered: true,
  fullWidth: false,
  platformaticIcon: null
}

export default Button
