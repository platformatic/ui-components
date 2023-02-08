import React, { useState } from 'react'
import PuzzleIcon from './icons/PuzzleIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faPlusCircle, faGear } from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.css'
import ReactTooltip from 'react-tooltip'
import Button from './Button'
import HorizontalSeparator from './HorizontalSeparator'

export default function Sidebar (props) {
  const {
    title,
    defaultSelected = 0,
    onClickItemSelectedParent = () => {},
    items = [],
    onClickAdd = () => {},
    addTitle = 'Add',
    onClickSettings = () => {}
  } = props
  const [collapsed, setCollapsed] = useState(false)
  const [selectedItem, setSelectedItem] = useState(defaultSelected)

  function onClickItemSelected (index) {
    setSelectedItem(index)
    onClickItemSelectedParent(index)
  }

  return (
    <div className={`${styles.container} ${collapsed && styles.collapsed}`}>
      {collapsed
        ? (
          <>
            <button type='button' className={styles.buttonPuzzle} onClick={() => { setCollapsed(false) }}>
              <PuzzleIcon tip='expand' />
            </button>
            <ReactTooltip />
          </>
          )
        : (
          <>
            <button type='button' className={styles.buttonCollapse} onClick={() => { setCollapsed(true) }}>
              <FontAwesomeIcon icon={faChevronLeft} size='1x' color='white' />
            </button>
            <div className={styles.title} data-testid='lateral-bar-title'>
              {title}
            </div>
            <div className={styles.items} data-test-id='lateral-bar-items'>
              {items.map((item, index) => {
                const isSelected = selectedItem === index
                return (
                  <React.Fragment key={index}>
                    <button className={`${styles.buttonItem} ${collapsed && styles.buttonItemCollapsed}`} type='button' onClick={() => onClickItemSelected(index)}>
                      <PuzzleIcon size='small' color={isSelected ? 'green' : 'white'} tip={item} />
                      <span className={`${styles.item} ${isSelected ? styles.itemSelected : ''}`}>{item}</span>
                    </button>
                    <ReactTooltip />
                  </React.Fragment>
                )
              })}
              {/* <Button label='Add' buttonClass='transparent' icon={faPlus} color='white' size='small' inClick={onClickAdd}/> */}
              <button className={`${styles.buttonItem} ${collapsed && styles.buttonItemCollapsed}`} onClick={onClickAdd}>
                <FontAwesomeIcon color='white' icon={faPlusCircle} data-tip={addTitle} />
                {!collapsed && <span className={styles.item}>{addTitle}</span>}
              </button>
            </div>
          </>
          )}
      <HorizontalSeparator marginBottom={2} marginTop={2} />

      <div className={styles.bottom}>
        <Button color='white' label='Settings' type='button' onClick={() => onClickSettings()} icon={faGear} />
      </div>
    </div>
  )
}
