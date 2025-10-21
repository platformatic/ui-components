import React, { useEffect, useState } from 'react'
import styles from './Button.module.css'
import commonStyles from './Common.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import {
  BOX_SHADOW,
  UNDERLINE,
  DULLS_BACKGROUND_COLOR,
  MAIN_DARK_BLUE,
  LARGE,
  CHANGE_BACKGROUND_COLOR,
  ACTIVE_AND_INACTIVE_STATUS,
  TRANSPARENT
} from './constants'
import SpinnerCircular from './loaders/SpinnerCircular'

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
  loading = false,
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
  if (disabled || loading) {
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
        {loading ? <SpinnerCircular className={styles.spinner} size={30} thickness={2} color={color} /> : null}
        {platformaticIcon ? <PlatformaticIcon key='left' iconName={platformaticIcon.iconName} color={platformaticIcon.color} data-testid='button-icon' onClick={null} inactive={inactive} /> : null}
        <span className={styles.label}>{label}</span>
        {platformaticIconAfter ? <PlatformaticIcon key='right' iconName={platformaticIconAfter.iconName} color={platformaticIconAfter.color} data-testid='button-icon' onClick={null} inactive={inactive} /> : null}
      </div>
    </button>
  )
}

export default Button
