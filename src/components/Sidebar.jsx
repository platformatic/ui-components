import React, { useEffect, useState } from 'react'
import Icons from './icons'
import Button from './Button'
import ButtonFullRounded from './ButtonFullRounded'
import commonStyles from './Common.module.css'
import styles from './Sidebar.module.css'
import ReactTooltip from 'react-tooltip'
import HorizontalSeparator from './HorizontalSeparator'
import PlatformaticIcon from './PlatformaticIcon'
import PropTypes from 'prop-types'
import { BACKGROUND_COLOR_OPAQUE, MEDIUM, WHITE } from './constants'

function Sidebar (props) {
  const {
    title,
    labelButtonSettings,
    defaultSelected,
    onClickItemSelectedParent,
    items,
    onClickAdd,
    addTitle,
    onClickSettings,
    disableClickAdd,
    disableClickSettings
  } = props
  const [collapsed, setCollapsed] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const disabledCreateButton = disableClickAdd ? styles.disabled : ''
  let buttonFullRoundedClassName = `${styles.buttonCollapse} `
  buttonFullRoundedClassName += commonStyles['background-color-main-dark-blue']

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
            <ButtonFullRounded
              className={buttonFullRoundedClassName}
              iconName='CircleArrowRightIcon'
              iconSize={MEDIUM}
              iconColor={WHITE}
              hoverEffect={BACKGROUND_COLOR_OPAQUE}
              onClick={() => { setCollapsed(false) }}
              bordered={false}
            />
            <button type='button' className={styles.buttonExpand} onClick={() => { setCollapsed(false) }}>
              <Icons.WorkspaceStaticIcon color='white' size='large' />
            </button>
            <div className={styles.titleCollapsed} data-testid='lateral-bar-title'>
              {title}
            </div>
            <HorizontalSeparator marginBottom={0} marginTop={0} />
            <div className={styles.bottom}>
              <button type='button' className={styles.buttonSettings} onClick={onClickSettings}>
                <Icons.GearIcon color='white' size='large' />
              </button>
            </div>
          </>
          )
        : (
          <>
            <ButtonFullRounded
              className={buttonFullRoundedClassName}
              iconName='CircleArrowLeftIcon'
              iconSize={MEDIUM}
              iconColor={WHITE}
              hoverEffect={BACKGROUND_COLOR_OPAQUE}
              onClick={() => { setCollapsed(true) }}
              bordered={false}
            />
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
                    <ReactTooltip place='top' type='info' />
                  </React.Fragment>
                )
              })}
              <button className={`${styles.buttonCreate} ${collapsed && styles.buttonItemCollapsed} ${disabledCreateButton} ${!disableClickAdd && styles.hoverSemibold}`} onClick={onClickAdd} disabled={disableClickAdd}>
                <PlatformaticIcon
                  iconName='CircleAddIcon'
                  color='white'
                  size='medium'
                  tip={addTitle}
                  onClick={null}
                />
                {!collapsed && <span className={styles.item}>{addTitle}</span>}
              </button>
            </div>
            <HorizontalSeparator marginBottom={2} marginTop={2} />

            <div className={styles.bottom}>
              <Button
                label={labelButtonSettings}
                color={WHITE}
                onClick={onClickSettings}
                platformaticIcon={{ iconName: 'GearIcon', color: WHITE }}
                fullWidth
                bold
                size={MEDIUM}
                disabled={disableClickSettings}
                hoverEffect={BACKGROUND_COLOR_OPAQUE}
              />
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
   * title
   */
  labelButtonSettings: PropTypes.string,
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
  onClickSettings: PropTypes.func,
  /**
   * disableClickAdd
   */
  disableClickAdd: PropTypes.bool,
  /**
   * disableClickSettings
   */
  disableClickSettings: PropTypes.bool
}

Sidebar.defaultProps = {
  title: '',
  labelButtonSettings: 'Settings',
  defaultSelected: null,
  onClickItemSelectedParent: () => {},
  items: [],
  onClickAdd: () => {},
  addTitle: 'Add',
  onClickSettings: () => {},
  disableClickAdd: false,
  disableClickSettings: false
}

export default Sidebar
