'use strict'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './TabbedWindowV2.module.css'
import commonStyles from './Common.module.css'
import { MAIN_DARK_BLUE, OPACITY_30, TRANSPARENT, WHITE } from './constants'
import VerticalSeparator from './VerticalSeparator'

function TabbedWindowV2 ({ tabs, keySelected, backgroundColor }) {
  const headers = []
  const keys = []
  const components = []
  tabs.forEach((tab) => {
    headers.push(tab.headerComponent)
    keys.push(tab.key)
    components.push(tab.component)
  })
  const [currentComponent, setCurrentComponent] = useState(components[0])
  const className = commonStyles.fullWidth + ' ' + commonStyles[`background-color-${backgroundColor}`] + ' '

  useEffect(() => {
    if (keySelected) {
      const indexKey = keys.findIndex(key => key === keySelected)
      setCurrentComponent(components[indexKey])
    }
  }, [keySelected])

  function renderHeaders () {
    const cmps = []
    headers.forEach((header, index) => {
      if (index > 0) {
        cmps.push(<VerticalSeparator color={WHITE} backgroundColorOpacity={OPACITY_30} key={`vs${index}`} />)
      }
      cmps.push(header())
      /* const element = header()
      cmps.push(
        React.cloneElement(element, {
          key: element.key,
          onClick: () => {setCurrentTab(index)},
        })
      ) */
    })
    return cmps
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles['tabs-header']}>
        {renderHeaders()}
      </div>
      <div className={styles['tabs-content']}>{currentComponent}</div>
    </div>
  )
}

TabbedWindowV2.propTypes = {
  /**
   * tabs
   */
  tabs: PropTypes.array,
  /**
   * keySelected
   */
  keySelected: PropTypes.string,
  /**
   * callbackSelected
   */
  callbackSelected: PropTypes.func,
  /**
   * backgroundColor
   */
  backgroundColor: PropTypes.oneOf([WHITE, MAIN_DARK_BLUE, TRANSPARENT])
}

TabbedWindowV2.defaultProps = {
  tabs: [],
  keySelected: '',
  callbackSelected: () => {},
  backgroundColor: MAIN_DARK_BLUE
}

export default TabbedWindowV2
