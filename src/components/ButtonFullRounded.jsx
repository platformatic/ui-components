import React from 'react'
import commonStyles from './Common.module.css'
import styles from './ButtonFullRounded.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { DULLS_BACKGROUND_COLOR, SMALL, WHITE, NONE } from './constants'
function ButtonFullRounded ({
  className = '',
  iconName = '',
  iconSize = SMALL,
  iconColor = WHITE,
  disabled = false,
  paddingSize = NONE,
  alt = 'ButtonFullRounded',
  onClick = () => {},
  hoverEffect = '',
  bordered = false,
  tip = '',
  selected = false,
  buttonClassName = ''
}) {
  const padding = commonStyles[`padding--${paddingSize}`]
  const containerClassName = `${className} border-0 ${styles.roundedFull}`
  let innerButtonClassName = `${buttonClassName} ${styles.roundedFull} ${styles.buttonRoundedFull} ${padding}`
  if (bordered) {
    innerButtonClassName += ` ${styles.applyBorder} ` + commonStyles[`bordered--${iconColor}`]
  } else {
    innerButtonClassName += ` ${styles.borderLess} `
  }
  if (disabled) {
    innerButtonClassName += ` ${styles.disabled}`
  } else {
    switch (hoverEffect) {
      case DULLS_BACKGROUND_COLOR:
        innerButtonClassName += ' ' + commonStyles[`hover-${DULLS_BACKGROUND_COLOR}-${iconColor}`]
        break
      default:
        break
    }
  }
  if (selected) innerButtonClassName += ' ' + commonStyles[`selected-background-color-${iconColor}`]

  return (
    <div className={containerClassName}>
      <button className={innerButtonClassName} disabled={disabled} onClick={onClick} alt={alt} type='button'>
        <PlatformaticIcon iconName={iconName} size={iconSize} color={iconColor} data-testid='button-icon' onClick={null} tip={tip} />
      </button>
    </div>
  )
}

export default ButtonFullRounded
