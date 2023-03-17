import React, { useEffect, useState } from 'react'
import Icons from './icons'
import styles from './Sidebar.module.css'
import ReactTooltip from 'react-tooltip'
import HorizontalSeparator from './HorizontalSeparator'
import PlatformaticIcon from './PlatformaticIcon'
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
  const [selectedItem, setSelectedItem] = useState(null)

  function onClickItemSelected (item) {
    setSelectedItem(item.id)
    onClickItemSelectedParent(item.id)
  }

  useEffect(() => {
    setSelectedItem(defaultSelected)
  }, [defaultSelected])

  return (
    <div className={`${styles.container} ${collapsed && styles.collapsed}`}>
      {collapsed
        ? (
          <>
            <button type='button' className={styles.buttonCollapse} onClick={() => { setCollapsed(false) }}>
              <PlatformaticIcon
                iconName='CircleArrowRightIcon'
                color='white'
                size='medium'
              />
            </button>
            <button type='button' className={styles.buttonExpand} onClick={() => { setCollapsed(false) }}>
              <Icons.WorkspaceStaticIcon color='white' size='large' />
            </button>
            <div className={styles.titleCollapsed} data-testid='lateral-bar-title'>
              {title}
            </div>
            <HorizontalSeparator marginBottom={2} marginTop={2} />
            <div className={styles.bottom}>
              <button type='button' className={styles.buttonSettings} onClick={onClickSettings}>
                <Icons.GearIcon color='white' size='large' />
              </button>
            </div>
          </>
          )
        : (
          <>
            <button type='button' className={styles.buttonCollapse} onClick={() => { setCollapsed(true) }}>
              <PlatformaticIcon
                iconName='CircleArrowLeftIcon'
                color='white'
                size='medium'
              />
            </button>
            <div className={styles.title} data-testid='lateral-bar-title'>
              {title}
            </div>
            <div className={styles.items} data-test-id='lateral-bar-items'>
              {items.map(item => {
                const isSelected = selectedItem === item.id
                return (
                  <React.Fragment key={item.id}>
                    <button className={`${styles.buttonItem} ${collapsed && styles.buttonItemCollapsed}`} type='button' onClick={() => onClickItemSelected(item)}>
                      {item.iconName && (<PlatformaticIcon
                        iconName={item.iconName}
                        color={isSelected ? 'main-green' : 'white'}
                        tip={item.title}
                        size='medium'
                                         />)}
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
              <button className={`${styles.buttonCreate} ${collapsed && styles.buttonItemCollapsed}`} onClick={onClickAdd}>
                <PlatformaticIcon
                  iconName='CircleAddIcon'
                  color='white'
                  size='medium'
                  tip={addTitle}
                />
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
  defaultSelected: PropTypes.string,
  /**
   * addTitle
   */
  addTitle: PropTypes.string,
  /**
   * items: array with keys
   * id: id of the worspacedSeleted
   * title: name to display
   * subtitle: secondary title
   * icon: what Icon
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
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
  defaultSelected: null,
  onClickItemSelectedParent: () => {},
  items: [],
  onClickAdd: () => {},
  addTitle: 'Add',
  onClickSettings: () => {}
}

export default Sidebar
