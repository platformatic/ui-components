'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { SIZES, COLORS_BUTTON, BOX_SHADOW, UNDERLINE, HOVER_EFFECTS_BUTTONS, BACKGROUND_COLOR_OPAQUE, MAIN_DARK_BLUE, LARGE } from './constants'

function Button ({
  classes,
  label,
  color,
  backgroundColor,
  size,
  disabled,
  bold,
  hoverEffect,
  bordered,
  fullWidth,
  platformaticIcon,
  platformaticIconAfter,
  selected,
  ...rest
}) {
  let buttonClassName = classes
  buttonClassName += ` ${styles.button} ${commonStyles['background-color-' + backgroundColor]} ${styles['color-' + color]} ${styles['button-' + size]}`
  if (!bordered) buttonClassName += ` ${styles['no-border']}`
  if (disabled) {
    buttonClassName += ` ${styles.disabled}`
  } else {
    switch (hoverEffect) {
      case BACKGROUND_COLOR_OPAQUE:
        buttonClassName += ' ' + commonStyles[`hover-${BACKGROUND_COLOR_OPAQUE}-${color}`]
        break
      case BOX_SHADOW:
        buttonClassName += ' ' + styles[`hover-${BOX_SHADOW}-${backgroundColor}`]
        break
      case UNDERLINE:
        buttonClassName += ` ${styles['underline-effect']}`
        break
      default:
        break
    }
  }
  if (bold) buttonClassName += ` ${styles.fontBold}`
  if (fullWidth) buttonClassName += ` ${styles.fullWidth}`
  if (selected) buttonClassName += ' ' + commonStyles[`selected-background-color-${color}`]
  return (
    <button className={buttonClassName} disabled={disabled} alt={label} {...rest}>
      {platformaticIcon ? <PlatformaticIcon key='left' iconName={platformaticIcon.iconName} color={platformaticIcon.color} data-testid='button-icon' onClick={null} /> : null}
      <span className={styles.label}>{label}</span>
      {platformaticIconAfter ? <PlatformaticIcon key='right' iconName={platformaticIconAfter.iconName} color={platformaticIconAfter.color} data-testid='button-icon' onClick={null} /> : null}
    </button>
  )
}

Button.propTypes = {
  /**
   * classes
   */
  classes: PropTypes.string,
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
   * platformaticIcon: should be removed
   */
  platformaticIcon: PropTypes.shape({
    iconName: PropTypes.string,
    color: PropTypes.string
  }),
  /**
   * platformaticIconAfter: should be removed
   */
  platformaticIconAfter: PropTypes.shape({
    iconName: PropTypes.string,
    color: PropTypes.string
  }),
  /**
   * Selected: default false
   */
  selected: PropTypes.bool
}

Button.defaultProps = {
  classes: '',
  label: '',
  color: MAIN_DARK_BLUE,
  backgroundColor: 'transparent',
  disabled: false,
  size: LARGE,
  bold: false,
  hoverEffect: BACKGROUND_COLOR_OPAQUE,
  bordered: true,
  fullWidth: false,
  platformaticIcon: null,
  selected: false
}

export default Button
