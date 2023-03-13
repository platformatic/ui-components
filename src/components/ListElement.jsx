import React from 'react'
import PropTypes from 'prop-types'
import PlatformaticIcon from './PlatformaticIcon'
import styles from './ListElement.module.css'

function List ({ title, detail, marginSize, titleAspect }) {
  let className = `${styles.container} `
  className += styles[`margin-${marginSize}`]

  let classNameTitle = `${styles.title} `
  classNameTitle += styles[`${titleAspect}`]

  return (
    <div className={className}>
      <div className={styles.row}>
        <PlatformaticIcon iconName='CircleCheckMarkIcon' color='green' data-testid='list-element-title-icon' onClick={null} />
        <div className={classNameTitle} data-testid='list-element-title'>
          {title}
        </div>
      </div>
      {detail &&
        (
          <div className={styles.textCol} data-test-id='list-element-detail'>
            {detail}
          </div>
        )}
    </div>
  )
}
List.propTypes = {
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * detail
   */
  detail: PropTypes.string,
  /**
   * marginSize
   */
  marginSize: PropTypes.oneOf(['small', 'medium']),
  /**
   * titleAspect
   */
  titleAspect: PropTypes.oneOf(['boldAndGreen', 'lightAndWhite'])
}

List.defaultProps = {
  title: '',
  detail: '',
  marginSize: 'medium',
  titleAspect: 'boldAndGreen'
}

export default List
