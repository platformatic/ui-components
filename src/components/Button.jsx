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
  ACTIVE_AND_INACTIVE_STATUS,
  TRANSPARENT
} from './constants'
// ${inactive ? styles.inactive : styles.active}
function Button ({
  textClass = '',
  paddingClass = '',
  label = '',
  color = MAIN_DARK_BLUE,
  backgroundColor = TRANSPARENT,
  size = LARGE,
  disabled = false,
  hoverEffect = DULLS_BACKGROUND_COLOR,
  hoverEffectProperties = {},
  bordered = true,
  fullWidth = false,
  platformaticIcon = null,
  platformaticIconAfter = null,
  selected = false,
  ...rest
}) {
  let buttonClassName = textClass
  let tmpBorderedClassName = ''
  buttonClassName += ` ${styles.button} ${styles['color-' + color]} `
  let contentClassName = `${styles.content} `
  if (paddingClass) {
    contentClassName += `${paddingClass} `
  } else {
    contentClassName += `${styles['button-' + size]} `
  }
  if (disabled) {
    tmpBorderedClassName = commonStyles[`bordered--${color}-30`]
    buttonClassName += ` ${styles.disabled}`
  } else {
    tmpBorderedClassName = bordered ? commonStyles[`bordered--${color}-70`] : ''
  }
  if (!bordered) buttonClassName += ` ${styles['no-border']}`
  if (fullWidth) {
    buttonClassName += ` ${styles.fullWidth}`
  }
  if (selected) buttonClassName += ' ' + commonStyles[`selected-background-color-${color}`]
  const [hover, setHover] = useState(false)
  const [inactive, setInactive] = useState(false)
  const [backgroundClassName, setBackgroundClassName] = useState(restClassName())
  const [borderedClassName, setBorderedClassName] = useState(tmpBorderedClassName)

  useEffect(() => {
    if (!disabled) {
      if (hover) {
        if (bordered) {
          setBorderedClassName(commonStyles[`bordered--${color}-100`])
        }
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
          case ACTIVE_AND_INACTIVE_STATUS:
            setInactive(false)
            setBackgroundClassName(`${restClassName()} ${styles.active}`)
            break
          default:
            break
        }
      } else {
        if (hoverEffect === ACTIVE_AND_INACTIVE_STATUS) {
          setInactive(true)
          setBackgroundClassName(`${restClassName()} ${styles.inactive}`)
        } else {
          setBackgroundClassName(restClassName())
        }
        if (bordered) {
          setBorderedClassName(commonStyles[`bordered--${color}-70`])
        }
      }
    } else {
      if (bordered) {
        setBorderedClassName(commonStyles[`bordered--${color}-30`])
      }
    }
  }, [disabled, hover, hoverEffect])

  function restClassName () {
    if (hoverEffect === ACTIVE_AND_INACTIVE_STATUS) {
      return `${commonStyles['background-color-' + backgroundColor]} ${commonStyles['background-color-opaque-70']} `
    }
    return `${commonStyles['background-color-' + backgroundColor]} `
  }

  return (
    <button className={`${buttonClassName} ${restClassName()} ${borderedClassName}`} disabled={disabled} alt={label} {...rest} onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
      <div className={`${contentClassName} ${backgroundClassName}`}>
        {platformaticIcon ? <PlatformaticIcon key='left' iconName={platformaticIcon.iconName} color={platformaticIcon.color} data-testid='button-icon' onClick={null} inactive={inactive} /> : null}
        <span className={styles.label}>{label}</span>
        {platformaticIconAfter ? <PlatformaticIcon key='right' iconName={platformaticIconAfter.iconName} color={platformaticIconAfter.color} data-testid='button-icon' onClick={null} inactive={inactive} /> : null}
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

export default Button
