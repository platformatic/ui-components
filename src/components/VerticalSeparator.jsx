'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { DARK_GREEN, MAIN_DARK_BLUE } from './constants'
import commonStyles from './Common.module.css'

function VerticalSeparator ({ color }) {
  const className = commonStyles[`text--${color}`] + ' my-auto mx-5'
  return <span className={className}> | </span>
}

VerticalSeparator.propTypes = {
  /**
   * color
   */
  color: PropTypes.oneOf([DARK_GREEN, MAIN_DARK_BLUE])
}

VerticalSeparator.defaultProps = {
  color: DARK_GREEN
}

export default VerticalSeparator
