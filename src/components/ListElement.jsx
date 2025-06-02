import React from 'react'
import PlatformaticIcon from './PlatformaticIcon'
import commonStyles from './Common.module.css'
import styles from './ListElement.module.css'
import { MAIN_DARK_BLUE, MEDIUM, SMALL, WHITE, MAIN_GREEN } from './constants'

function List ({
  title = '',
  detail = '',
  marginSize = MEDIUM,
  detailColor = WHITE,
  titleColor = MAIN_GREEN,
  semiBold = true,
  iconColor = MAIN_GREEN
}) {
  let className = `${styles.container} `
  className += styles[`margin-${marginSize}`]

  let classNameTitle = `${styles.title} ${semiBold ? commonStyles.fontSemiBold : commonStyles.fontLight} `
  classNameTitle += commonStyles[`text--${titleColor}`]

  let detailClassName = `${styles.textCol} `
  detailClassName += commonStyles[`text--${detailColor}`]

  return (
    <div className={className}>
      <div className={styles.row}>
        <PlatformaticIcon iconName='CircleCheckMarkIcon' color={iconColor} data-testid='list-element-title-icon' onClick={null} size={MEDIUM} />
        <div className={classNameTitle} data-testid='list-element-title'>
          {title}
        </div>
      </div>
      {detail &&
        (
          <div className={detailClassName} data-test-id='list-element-detail'>
            {detail}
          </div>
        )}
    </div>
  )
}

export default List
