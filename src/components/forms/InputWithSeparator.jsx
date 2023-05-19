'use strict'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import inputStyles from './Input.module.css'
import styles from './InputWithSeparator.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { BACKGROUND_COLOR_OPAQUE, MAIN_DARK_BLUE, MAIN_GREEN, MEDIUM, TRANSPARENT } from '../constants'
import BorderedBox from '../BorderedBox'
import ButtonFullRounded from '../ButtonFullRounded'

function InputWithSeparator ({ placeholder, name, borderColor, errorMessage, onChange, disabled, afterIcon, value, separator }) {
  const [chunks, setChunks] = useState([])
  const [inputClassName, setInputClassName] = useState(`${styles.flexNone} ${styles.smallMargin} ${commonStyles.fullWidth}`)
  const chunkClasses = `${styles.flexNone} ${styles.smallPadding} ${styles.smallMargin}`

  let className = styles.inputContainer + ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`] + ' ' + styles.smallPadding
  const showError = errorMessage.length > 0
  if (showError) className += ' ' + commonStyles['bordered--error-red']
  if (disabled) className += ' ' + commonStyles['apply-opacity-30']

  function handleRemove (chunk) {
    const index = chunks.findIndex(c => c === chunk)
    if (index > -1) {
      chunks.splice(index, 1)
      setChunks(chunks => [...chunks])
      onChange({ value, chunks })
    }
  }

  function handleChange (event) {
    if (!showError && event.target.value.indexOf(separator) > -1) {
      const elements = event.target.value.split(separator)
      if (elements[0] !== '') {
        const tmp = [elements[0]]
        setChunks(prevChunks => [...prevChunks, ...tmp])
        onChange({ value: elements[1], chunks })
        return
      }
    }
    onChange({ value: event.target.value, chunks })
  }

  useEffect(() => {
    if (chunks.length > 0) {
      setInputClassName(`${styles.flexNone} ${styles.smallMargin}`)
    } else {
      setInputClassName(`${styles.flexNone} ${styles.smallMargin} ${commonStyles.fullWidth}`)
    }
  }, [chunks.length])

  function renderChunk (chunk, index) {
    return (
      <BorderedBox color={TRANSPARENT} backgroundColor={MAIN_DARK_BLUE} backgroundColorOpacity={20} classes={chunkClasses} key={index}>
        <div className={styles.chunkContent}>
          <span className={styles.chunkText}>{chunk}</span>
          <ButtonFullRounded
            className=''
            iconName='CircleCloseIcon'
            iconSize={MEDIUM}
            iconColor={MAIN_DARK_BLUE}
            hoverEffect={BACKGROUND_COLOR_OPAQUE}
            onClick={() => handleRemove(chunk)}
            bordered={false}
            alt='Close'
          />
        </div>
      </BorderedBox>
    )
  }
  return (
    <div className={inputStyles.container}>
      <div className={className}>
        {chunks.map((value, index) => renderChunk(value, index))}
        <input type='text' name={name} value={value} placeholder={placeholder} className={inputClassName} onChange={handleChange} disabled={disabled} />
      </div>
      {afterIcon && <div className={styles.iconContainer}><PlatformaticIcon iconName={afterIcon.iconName} color={afterIcon.color} data-testid='after-icon' onClick={afterIcon.handleClick} /></div>}
      {showError && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </div>
  )
}

InputWithSeparator.propTypes = {
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * name
   */
  name: PropTypes.string,
  /**
   * value
   */
  value: PropTypes.string,
  /**
   * separator
   */
  separator: PropTypes.string,
  /**
   * color of border
   */
  borderColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE]),
  /**
   * onChange
   */
  onChange: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * afterIcon: PlatformaticIcon props
   */
  afterIcon: PropTypes.shape({
    iconName: PropTypes.string,
    color: PropTypes.string,
    handleClick: PropTypes.func
  })
}

InputWithSeparator.defaultProps = {
  placeholder: '',
  value: '',
  name: '',
  borderColor: 'main-green',
  errorMessage: '',
  onChange: () => {},
  disabled: false,
  afterIcon: null,
  separator: ''
}

export default InputWithSeparator
