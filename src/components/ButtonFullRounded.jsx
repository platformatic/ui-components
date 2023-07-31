'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import commonStyles from './Common.module.css'
import styles from './ButtonFullRounded.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_ICON, SIZES, BACKGROUND_COLOR_OPAQUE, PADDING_SIZES, SMALL, WHITE, NONE } from './constants'
function ButtonFullRounded ({
  className,
  iconName,
  iconSize,
  iconColor,
  disabled,
  paddingSize,
  alt,
  onClick,
  hoverEffect,
  bordered,
  tip,
  selected
}) {
  const padding = commonStyles[`padding--${paddingSize}`]
  const containerClassName = `${className} border-0 ${styles.roundedFull}`
  let buttonClassName = `${styles.roundedFull} ${styles.buttonRoundedFull} ${padding}`
  if (bordered) {
    buttonClassName += ` ${styles.applyBorder} ` + commonStyles[`bordered--${iconColor}`]
  } else {
    buttonClassName += ` ${styles.borderLess} `
  }
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
  if (selected) buttonClassName += ' ' + commonStyles[`selected-background-color-${iconColor}`]

  return (
    <div className={containerClassName}>
      <button className={buttonClassName} disabled={disabled} onClick={onClick} alt={alt} type='button'>
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
  hoverEffect: PropTypes.oneOf(['', BACKGROUND_COLOR_OPAQUE]),
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
  selected: PropTypes.bool

}

ButtonFullRounded.defaultProps = {
  className: '',
  iconName: '',
  iconColor: WHITE,
  iconSize: SMALL,
  disabled: false,
  paddingSize: NONE,
  alt: 'ButtonFullRounded',
  onClick: () => {},
  hoverEffect: '',
  bordered: false,
  tip: '',
  selected: false
}

export default ButtonFullRounded
