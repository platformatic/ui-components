import React, { useState } from 'react'
import Icons from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.css'
import ReactTooltip from 'react-tooltip'
import HorizontalSeparator from './HorizontalSeparator'
import PropTypes from 'prop-types'

function Sidebar (props) {
  const {
    title,
    defaultSelected,
    onClickItemSelectedParent,
    items,
    onClickAdd,
    addTitle,
    onClickSettings
  } = props
  const [collapsed, setCollapsed] = useState(false)
  const [selectedItem, setSelectedItem] = useState(defaultSelected)

  function onClickItemSelected (index) {
    setSelectedItem(index)
    onClickItemSelectedParent(index)
  }

  function renderItemIcon (iconName, title, isSelected) {
    if (iconName) {
      return React.createElement(Icons[`${iconName}`], {
        size: 'small',
        color: isSelected ? 'green' : 'white',
        tip: title
      })
    }
    return (<></>)
  }

  return (
    <div className={`${styles.container} ${collapsed && styles.collapsed}`}>
      {collapsed
        ? (
          <>
            <button type='button' className={styles.buttonExpand} onClick={() => { setCollapsed(false) }}>
              <Icons.StaticWorkspaceIcon color='white' />
            </button>
            <div className={styles.titleCollapsed} data-testid='lateral-bar-title'>
              {title}
            </div>
            <HorizontalSeparator marginBottom={2} marginTop={2} />
            <div className={styles.bottom}>
              <button type='button' className={styles.buttonSettings} onClick={onClickSettings}>
                <Icons.GearIcon color='white' />
              </button>
              <div className={styles.titleCollapsed} data-testid='lateral-bar-title'>
                Settings
              </div>
            </div>
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
                      {renderItemIcon(item.iconName, item.title, isSelected)}
                      <div className={`${styles.item} ${isSelected ? styles.itemSelected : ''}`}>
                        <span className={styles.itemSubTitle}>{item.subTitle}</span>
                        <span className={styles.itemTitle}>{item.title}</span>
                      </div>
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
            <HorizontalSeparator marginBottom='2' marginTop='2' />

            <div className={styles.bottom}>
              <button type='button' className={`${styles.buttonSettings} ${styles.buttonSettingsExpanded}`} onClick={onClickSettings}>
                <Icons.GearIcon color='white' size='small' /> <span className={styles.titleSettings}>Settings</span>
              </button>
            </div>
          </>
          )}
    </div>
  )
}

Sidebar.propTypes = {
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * defaultSelected
   */
  defaultSelected: PropTypes.number,
  /**
   * addTitle
   */
  addTitle: PropTypes.string,
  /**
   * items: array with keys
   * title: name to display
   * subtitle: secondary title
   * icon: what Icon
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    iconName: PropTypes.string
  })),
  /**
   * Apply onClickItemSelectedParent
   */
  onClickItemSelectedParent: PropTypes.func,
  /**
   * Apply onClickAdd: function called clicking on plus button
   */
  onClickAdd: PropTypes.func,
  /**
   * Apply onClickSettings: function called clicking on Settings button
   */
  onClickSettings: PropTypes.func

}

Sidebar.defaultProps = {
  title: '',
  defaultSelected: 0,
  onClickItemSelectedParent: () => {},
  items: [],
  onClickAdd: () => {},
  addTitle: 'Add',
  onClickSettings: () => {}
}

export default Sidebar
