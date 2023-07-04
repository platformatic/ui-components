'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import ButtonFullRounded from './ButtonFullRounded'
import useEscapeKey from '../hooks/useEscapeKey'
import Logo from './Logo'
import HorizontalSeparator from './HorizontalSeparator'
import styles from './ModalStepsForward.module.css'
import commonStyles from './Common.module.css'
import {
  MODAL_SIZES,
  SMALL,
  MODAL_LAYOUTS,
  MODAL_POPUP,
  MAIN_DARK_BLUE,
  BACKGROUND_COLOR_OPAQUE,
  LARGE,
  PROFILES,
  MARGIN_0,
  OPACITY_20
} from './constants'

function ModalStepsForward ({ setIsOpen, right, stepper, left }) {
  const buttonFullRoundedClassName = commonStyles['background-color-white']
  let modalCoverClassName = `${styles.container} ${styles.fullscreen} `
  modalCoverClassName += commonStyles['background-color-light-blue']

  useEscapeKey(() => setIsOpen(false))

  return (
    <div className={modalCoverClassName}>
      <div className={styles.left}>
        <Logo width={100} heigth={80} color={MAIN_DARK_BLUE} />
        <HorizontalSeparator marginTop={MARGIN_0} marginBottom={MARGIN_0} color={MAIN_DARK_BLUE} opacity={OPACITY_20} />
        {stepper}
        <div className={styles.leftWrapper}>
          {left}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.headerRight}>
          <ButtonFullRounded
            className={buttonFullRoundedClassName}
            iconName='CircleCloseIcon'
            iconSize={LARGE}
            iconColor={MAIN_DARK_BLUE}
            hoverEffect={BACKGROUND_COLOR_OPAQUE}
            onClick={() => { setIsOpen(false) }}
            bordered={false}
            alt='Close'
          />
        </div>
        {right}
      </div>
    </div>
  )
}

ModalStepsForward.propTypes = {
  /**
   * setIsOpen
   */
  setIsOpen: PropTypes.func,
  /**
   * layout
   */
  layout: PropTypes.oneOf(MODAL_LAYOUTS),
  /**
   * Size
   */
  size: PropTypes.oneOf(MODAL_SIZES),
  /**
   * profile
   */
  profile: PropTypes.oneOf(PROFILES),
  /**
   * backgroundClassName
   */
  backgroundClassName: PropTypes.string
}

ModalStepsForward.defaultProps = {
  setIsOpen: () => {},
  layout: MODAL_POPUP,
  size: SMALL,
  profile: '',
  backgroundClassName: ''
}

export default ModalStepsForward
