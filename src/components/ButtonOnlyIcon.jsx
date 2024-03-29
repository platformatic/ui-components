'use strict'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { SIZES, COLORS_BUTTON, BOX_SHADOW, UNDERLINE, HOVER_EFFECTS_BUTTONS, DULLS_BACKGROUND_COLOR, MAIN_DARK_BLUE, LARGE, MEDIUM } from './constants'

function ButtonOnlyIcon ({
  textClass,
  paddingClass,
  altLabel,
  color,
  backgroundColor,
  size,
  disabled,
  hoverEffect,
  bordered,
  fullWidth,
  platformaticIcon,
  platformaticIconAfter,
  selected,
  ...rest
}) {
  let contentClassName = `${styles.content} `
  if (paddingClass) {
    contentClassName += `${paddingClass} `
  } else {
    contentClassName += `${styles['button-' + size]} `
  }
  let baseButtonClassName = textClass
  baseButtonClassName += ` ${styles.button} `
  if (fullWidth) {
    baseButtonClassName += ` ${styles.fullWidth}`
  }
  if (selected) baseButtonClassName += ' ' + commonStyles[`selected-background-color-${color}`]
  const [hover, setHover] = useState(false)
  const [backgroundClassName, setBackgroundClassName] = useState(restClassName())
  const [buttonClassName, setButtonClassName] = useState(disabled ? buttonRestClassName : buttonActiveClassName())

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
          default:
            break
        }
      } else {
        setBackgroundClassName(restClassName())
      }
    }
  }, [disabled, hover, hoverEffect])

  useEffect(() => {
    if (disabled) {
      setButtonClassName(buttonRestClassName())
    } else {
      setButtonClassName(buttonActiveClassName())
    }
  }, [disabled])

  function restClassName () {
    return `${commonStyles['background-color-' + backgroundColor]} `
  }

  function buttonRestClassName () {
    if (!bordered) return ` ${styles['no-border']}`
    return commonStyles[`bordered--${color}-30`]
  }

  function buttonActiveClassName () {
    if (!bordered) return ` ${styles['no-border']}`
    return commonStyles[`bordered--${color}-100`]
  }

  return (
    <button className={`${baseButtonClassName} ${buttonClassName} ${restClassName()}`} disabled={disabled} alt={altLabel} {...rest} onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
      <div className={`${contentClassName} ${backgroundClassName}`}>
        {platformaticIcon ? <PlatformaticIcon key='center' iconName={platformaticIcon.iconName} color={platformaticIcon.color} data-testid='button-icon' size={MEDIUM} onClick={null} disabled={disabled} /> : null}
      </div>
    </button>
  )
}

ButtonOnlyIcon.propTypes = {
  /**
   * textClass
   */
  textClass: PropTypes.string,
  /**
   * paddingClass
   */
  paddingClass: PropTypes.string,
  /**
   * altLabel
   */
  altLabel: PropTypes.string,
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

ButtonOnlyIcon.defaultProps = {
  textClass: '',
  paddingClass: '',
  altLabel: '',
  color: MAIN_DARK_BLUE,
  backgroundColor: 'transparent',
  disabled: false,
  size: LARGE,
  hoverEffect: DULLS_BACKGROUND_COLOR,
  bordered: true,
  fullWidth: false,
  platformaticIcon: null,
  selected: false
}

export default ButtonOnlyIcon
