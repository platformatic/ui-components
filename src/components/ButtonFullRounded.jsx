'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import commonStyles from './Common.module.css'
import styles from './ButtonFullRounded.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_ICON, SIZES, DULLS_BACKGROUND_COLOR, PADDING_SIZES, SMALL, WHITE, NONE } from './constants'
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

ButtonFullRounded.propTypes = {
  /**
   * iconName
   */
  iconName: PropTypes.string,
  /**
   * iconColor
   */
  iconColor: PropTypes.oneOf(COLORS_ICON),
  /**
   * iconColor
   */
  iconSize: PropTypes.oneOf(SIZES),
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * paddingSize
   */
  paddingSize: PropTypes.oneOf(PADDING_SIZES),
  /**
   * alt
   */
  alt: PropTypes.string,
  /**
   * onClick
   */
  onClick: PropTypes.func,
  /**
   * Effect on hover
   */
  hoverEffect: PropTypes.oneOf(['', DULLS_BACKGROUND_COLOR]),
  /**
   * bordered
   */
  bordered: PropTypes.bool,
  /**
   * tip
   */
  tip: PropTypes.string,
  /**
   * Selected: default false
   */
  selected: PropTypes.bool,
  /**
     * buttonClassName
     */
  buttonClassName: PropTypes.string,
  /**
     * internalOverHandling
     */
  internalOverHandling: PropTypes.bool
}

export default ButtonFullRounded
