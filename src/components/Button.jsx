'use strict'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import {
  SIZES,
  COLORS_BUTTON,
  BOX_SHADOW,
  UNDERLINE,
  HOVER_EFFECTS_BUTTONS,
  DULLS_BACKGROUND_COLOR,
  MAIN_DARK_BLUE,
  LARGE,
  CHANGE_BACKGROUND_COLOR,
  BUTTON_BACKGROUNDS_COLOR_HOVER,
  TRANSPARENT
} from './constants'

function Button ({
  textClass,
  paddingClass,
  label,
  color,
  backgroundColor,
  size,
  disabled,
  hoverEffect,
  hoverEffectProperties,
  bordered,
  fullWidth,
  platformaticIcon,
  platformaticIconAfter,
  selected,
  ...rest
}) {
  let buttonClassName = textClass
  buttonClassName += ` ${styles.button} ${styles['color-' + color]} `
  let contentClassName = `${styles.content} `
  if (paddingClass) {
    contentClassName += `${paddingClass} `
  } else {
    contentClassName += `${styles['button-' + size]} `
  }
  if (disabled) {
    buttonClassName += ' ' + commonStyles[`bordered--${color}-30`]
    contentClassName += ` ${styles.disabled}`
  } else {
    buttonClassName += bordered ? commonStyles[`bordered--${color}-100`] : ''
  }
  if (!bordered) buttonClassName += ` ${styles['no-border']}`
  if (fullWidth) {
    buttonClassName += ` ${styles.fullWidth}`
  }
  if (selected) buttonClassName += ' ' + commonStyles[`selected-background-color-${color}`]
  const [hover, setHover] = useState(false)
  const [backgroundClassName, setBackgroundClassName] = useState(restClassName())

  useEffect(() => {
    if (!disabled) {
      if (hover) {
        switch (hoverEffect) {
          case DULLS_BACKGROUND_COLOR:
            setBackgroundClassName(restClassName() + ' ' + commonStyles[`hover-${DULLS_BACKGROUND_COLOR}-${color}`])
            break
          case BOX_SHADOW:
            setBackgroundClassName(restClassName() + ' ' + styles[`hover-${BOX_SHADOW}-${backgroundColor}`])
            break
          case UNDERLINE:
            setBackgroundClassName(`${restClassName()} ${styles['underline-effect']}`)
            break
          case CHANGE_BACKGROUND_COLOR:
            setBackgroundClassName(`${commonStyles['background-color-' + hoverEffectProperties.changeBackgroundColor]} `)
            break
          default:
            break
        }
      } else {
        setBackgroundClassName(restClassName())
      }
    }
  }, [disabled, hover, hoverEffect])

  function restClassName () {
    return `${commonStyles['background-color-' + backgroundColor]} `
  }

  return (
    <button className={`${buttonClassName} ${restClassName()}`} disabled={disabled} alt={label} {...rest} onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
      <div className={`${contentClassName} ${backgroundClassName}`}>
        {platformaticIcon ? <PlatformaticIcon key='left' iconName={platformaticIcon.iconName} color={platformaticIcon.color} data-testid='button-icon' onClick={null} disabled={disabled} /> : null}
        <span className={styles.label}>{label}</span>
        {platformaticIconAfter ? <PlatformaticIcon key='right' iconName={platformaticIconAfter.iconName} color={platformaticIconAfter.color} data-testid='button-icon' onClick={null} disabled={disabled} /> : null}
      </div>
    </button>
  )
}

Button.propTypes = {
  /**
   * textClass
   */
  textClass: PropTypes.string,
  /**
   * paddingClass
   */
  paddingClass: PropTypes.string,
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
   * Effect on hover
   */
  hoverEffect: PropTypes.oneOf(HOVER_EFFECTS_BUTTONS),
  /**
   * Hover effect properties
   */
  hoverEffectProperties: PropTypes.shape({
    changeBackgroundColor: PropTypes.oneOf(BUTTON_BACKGROUNDS_COLOR_HOVER)
  }),
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
  textClass: '',
  paddingClass: '',
  label: '',
  color: MAIN_DARK_BLUE,
  backgroundColor: TRANSPARENT,
  disabled: false,
  size: LARGE,
  hoverEffect: DULLS_BACKGROUND_COLOR,
  hoverEffectProperties: {},
  bordered: true,
  fullWidth: false,
  platformaticIcon: null,
  selected: false
}

export default Button
