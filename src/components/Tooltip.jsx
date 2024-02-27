'use strict'
import PropTypes from 'prop-types'
import styles from './Tooltip.module.css'

function Tooltip ({ tooltipClassName, text, visible }) {
  return <span className={`${styles.pltTooltipText} ${tooltipClassName} ${visible ? styles.pltTooltipTextVisible : ''}`}>{text}</span>
}

Tooltip.propTypes = {
  /**
   * text
   */
  text: PropTypes.string,
  /**
   * tooltipClassName
   */
  tooltipClassName: PropTypes.string,
  /**
   * visible
   */
  visible: PropTypes.bool
}

Tooltip.defaultProps = {
  text: '',
  tooltipClassName: '',
  visible: false
}

export default Tooltip
