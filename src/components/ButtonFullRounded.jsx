'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import commonStyles from './Common.module.css'
import styles from './ButtonFullRounded.module.css'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_ICON, SIZES } from './constants'
function ButtonFullRounded ({ iconName, iconSize, iconColor, disabled, paddingSize, alt, onClick }) {
  const borderColor = commonStyles[`bordered--${iconColor}`]
  const padding = commonStyles[`padding--${paddingSize}`]
  let className = `${styles.buttonRoundedFull} ${borderColor} ${padding}`
  if (disabled) className += ` ${styles.disabled}`

  return (
    <button className={className} disabled={disabled} onClick={onClick} alt={alt}>
      <PlatformaticIcon iconName={iconName} size={iconSize} color={iconColor} data-testid='button-icon' onClick={null} />
    </button>
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
  paddingSize: PropTypes.oneOf(SIZES),
  /**
   * alt
   */
  alt: PropTypes.string,
  /**
   * onClick
   */
  onClick: PropTypes.func
}

ButtonFullRounded.defaultProps = {
  iconName: '',
  iconColor: 'white',
  iconSize: 'small',
  disabled: false,
  paddingSize: 'small',
  alt: 'ButtonFullRounded',
  onClick: () => {}
}

export default ButtonFullRounded
