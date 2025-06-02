import React, { useEffect, useState } from 'react'
import styles from './TabbedWindow.module.css'
import { WHITE } from './constants'

function TabbedWindow ({
  tabs = [],
  keySelected = '',
  callbackSelected = () => {},
  tabContainerClassName = '',
  tabContentClassName = '',
  textClassName = '',
  horizontalSeparatorColor = WHITE
}) {
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
  const containerClassName = tabContainerClassName || styles.tabContainerClassName
  const contentClassName = tabContentClassName || styles.tabContentClassName
  useEffect(() => {
    const indexKey = keys.findIndex(key => key === selected)
    setCurrentComponent(components[indexKey])
  }, [selected])

  function setCurrentTab (index) {
    setSelected(keys[index])
    callbackSelected(keys[index])
  }

  return (
    <div className={containerClassName}>
      <div className={styles['tabs-header']}>
        {headers.map((header, index) => {
          return (
            <React.Fragment key={index}>
              <span onClick={() => setCurrentTab(index)} className={`${styles.tab} ${textClassName} ${selected === keys[index] ? styles['selected-tab'] : ''}`} title={header}>
                {header}
              </span>
            </React.Fragment>
          )
        })}
        <hr className={styles.divider} />
      </div>
      <div className={contentClassName}>{currentComponent}</div>
    </div>
  )
}

export default TabbedWindow
