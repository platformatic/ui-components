'use strict'
import React, { useEffect, useState } from 'react'
import styles from './TabbedWindow.module.css'

export default function TabbedWindow (props) {
  const { tabs, defaultSelected = 0, callbackSelected = () => {} } = props
  const [selected, setSelected] = useState(defaultSelected)
  const headers = []
  const components = []
  tabs.forEach((tab) => {
    headers.push(tab.label)
    components.push(tab.component)
  })
  let currentComponent = components[selected]

  useEffect(() => {
    currentComponent = components[selected]
  }, [selected])

  function setCurrentTab (index) {
    setSelected(index)
    callbackSelected(index)
  }

  return (
    <div className={styles['tabbed-container']}>
      <div className={styles['tabs-header']}>
        {headers.map((header, index) => {
          return (
            <span onClick={() => setCurrentTab(index)} key={index} className={`${styles.tab} ${selected === index ? styles['selected-tab'] : ''}`}>
              {header}
            </span>
          )
        })}
      </div>
      <div className={styles['tabs-content']}>{currentComponent()}</div>
    </div>
  )
}
