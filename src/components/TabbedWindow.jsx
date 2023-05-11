'use strict'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './TabbedWindow.module.css'

function TabbedWindow ({ tabs, keySelected, callbackSelected }) {
  const headers = []
  const keys = []
  const components = []
  tabs.forEach((tab) => {
    headers.push(tab.label)
    keys.push(tab.key)
    components.push(tab.component)
  })
  const [selected, setSelected] = useState(keySelected || tabs?.at(0).key || '')
  const [currentComponent, setCurrentComponent] = useState(components[0])

  useEffect(() => {
    const indexKey = keys.findIndex(key => key === selected)
    setCurrentComponent(components[indexKey])
  }, [selected])

  function setCurrentTab (index) {
    setSelected(keys[index])
    callbackSelected(keys[index])
  }

  return (
    <div className={styles['tabbed-container']}>
      <div className={styles['tabs-header']}>
        {headers.map((header, index) => {
          return (
            <span onClick={() => setCurrentTab(index)} key={index} className={`${styles.tab} ${selected === keys[index] ? styles['selected-tab'] : ''}`}>
              {header}
            </span>
          )
        })}
      </div>
      <div className={styles['tabs-content']}>{currentComponent}</div>
    </div>
  )
}

TabbedWindow.propTypes = {
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
  callbackSelected: PropTypes.func

}

TabbedWindow.defaultProps = {
  tabs: [],
  keySelected: '',
  callbackSelected: () => {}
}

export default TabbedWindow
