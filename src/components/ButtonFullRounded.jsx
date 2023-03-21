'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import commonStyles from './Common.module.css'
import styles from './ButtonFullRounded.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_ICON, SIZES, BACKGROUND_COLOR_OPAQUE, PADDING_SIZES } from './constants'
function ButtonFullRounded ({ className, iconName, iconSize, iconColor, disabled, paddingSize, alt, onClick, hoverEffect, bordered }) {
  const padding = commonStyles[`padding--${paddingSize}`]
  const containerClassName = `${className} ${styles.roundedFull} ` + commonStyles['background-color-main-dark-blue']
  let buttonClassName = `${styles.roundedFull} ${styles.buttonRoundedFull} ${padding}`
  if (bordered) buttonClassName += ' ' + commonStyles[`bordered--${iconColor}`]
  if (disabled) {
    buttonClassName += ` ${styles.disabled}`
  } else {
    switch (hoverEffect) {
      case BACKGROUND_COLOR_OPAQUE:
        buttonClassName += ' ' + commonStyles[`hover-${BACKGROUND_COLOR_OPAQUE}-${iconColor}`]
        break
      default:
        break
    }
  }

  return (
    <div className={containerClassName}>
      <button className={buttonClassName} disabled={disabled} onClick={onClick} alt={alt}>
        <PlatformaticIcon iconName={iconName} size={iconSize} color={iconColor} data-testid='button-icon' onClick={null} />
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
  hoverEffect: PropTypes.oneOf([BACKGROUND_COLOR_OPAQUE]),
  /**
   * bordered
   */
  bordered: PropTypes.bool

}

ButtonFullRounded.defaultProps = {
  iconName: '',
  iconColor: 'white',
  iconSize: 'small',
  disabled: false,
  paddingSize: 'none',
  alt: 'ButtonFullRounded',
  onClick: () => {},
  hoverEffect: '',
  bordered: true
}

export default ButtonFullRounded
