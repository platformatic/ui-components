'use strict'
import PropTypes from 'prop-types'
import styles from './Tooltip.module.css'
import { /* useEffect,  */useRef } from 'react'

function Tooltip ({ tooltipClassName, text, visible }) {
  const ref = useRef(null)

  /* useEffect(()=>{
    if (visible && ref.current) {
      ref.current.style.marginLeft = '-' + ((ref.current.clientWidth / 2) - 12) + 'px'
    }
  }, [visible])
 */
  return <span ref={ref} className={`${styles.pltTooltipText} ${tooltipClassName} ${visible ? styles.pltTooltipTextVisible : ''}`}>{text}</span>
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
