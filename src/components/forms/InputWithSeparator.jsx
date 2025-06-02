import React, { useState, useEffect } from 'react'
import inputStyles from './Input.module.css'
import styles from './InputWithSeparator.module.css'
import commonStyles from '../Common.module.css'
import { DULLS_BACKGROUND_COLOR, ERROR_RED, MAIN_DARK_BLUE, MAIN_GREEN, MEDIUM, OPACITY_30, RICH_BLACK, SIZES, SMALL, TRANSPARENT, WHITE } from '../constants'
import BorderedBox from '../BorderedBox'
import ButtonFullRounded from '../ButtonFullRounded'
import PlatformaticIcon from '../PlatformaticIcon'

function InputWithSeparator ({
  placeholder = '',
  name = '',
  value = '',
  borderColor = MAIN_GREEN,
  backgroundColor = WHITE,
  errorMessage = '',
  errorMessageTextClassName = '',
  onChange = () => {},
  disabled = false,
  afterIcon = null,
  beforeIcon = null,
  defaultValue = '',
  defaultValueSeparator = ',',
  separators = [''],
  inputTextClassName = ''
}) {
  const showError = errorMessage.length > 0
  const [focus, setFocus] = useState(false)
  const baseClassName = `${styles.input} ${styles.flexNone} ${styles.smallMargin} ${inputTextClassName} ` + commonStyles[`background-color-${backgroundColor}`]
  const buttonClassName = commonStyles[`background-color-${borderColor}`] + ' ' + commonStyles['background-color-opaque-30']
  const errorMessageClassName = errorMessageTextClassName || commonStyles['error-message']
  const [chunks, setChunks] = useState([])
  const [inputClassName, setInputClassName] = useState(normalClassName())
  const [inputContainerClassName, setInputContainerClassName] = useState(unFocusedClassName())
  const chunkClasses = styles.chunkClasses

  useEffect(() => {
    if (defaultValue.length > 0) {
      const elements = defaultValue.split(defaultValueSeparator).filter(e => e !== '')
      setChunks(prevChunks => [...prevChunks, ...elements])
    }
  }, [])

  useEffect(() => {
    if (chunks.length > 0) {
      setInputClassName(withChunksClassName())
    } else {
      setInputClassName(normalClassName())
    }
  }, [chunks.length])

  useEffect(() => {
    if (disabled) {
      setInputContainerClassName(unFocusedClassName() + ' ' + commonStyles['apply-opacity-30'])
    } else {
      if (focus) {
        setInputContainerClassName(focusedClassName())
      } else {
        setInputContainerClassName(unFocusedClassName())
      }
    }
  }, [focus, disabled])

  function handleRemove (chunk) {
    const index = chunks.findIndex(c => c === chunk)
    if (index > -1) {
      chunks.splice(index, 1)
      setChunks(chunks => [...chunks])
      onChange({ value, chunks: [...chunks] })
    }
  }

  function handleChange (event) {
    if (!showError) {
      let elements
      for (const separator of separators) {
        if (event.target.value.indexOf(separator) > -1) {
          elements = event.target.value.split(separator)
          if (elements[0] !== '') {
            const tmp = [elements[0]]
            setChunks(prevChunks => [...prevChunks, ...tmp])
            onChange({ value: elements[1], chunks: [...chunks, ...tmp] })
            return
          }
        }
      }
    }
    onChange({ value: event.target.value, chunks })
  }

  function handleKeyDown (event) {
    if ((event.keyCode === 46 || event.keyCode === 8) && value === '' && chunks.length > 0) {
      const tmpChunks = chunks.filter((_elem, index) => index < chunks.length - 1)
      setChunks(tmpChunks)
      onChange({ value: '', chunks: tmpChunks })
    }
  }

  function normalClassName () {
    return `${baseClassName} `
  }

  function withChunksClassName () {
    return baseClassName
  }

  function focusedClassName () {
    const useEffectColor = showError ? ERROR_RED : borderColor
    return styles.inputContainer + ' ' + commonStyles[`bordered--${useEffectColor}-100`]
  }

  function unFocusedClassName () {
    const useEffectColor = showError ? ERROR_RED : borderColor
    return styles.inputContainer + ' ' + commonStyles[`bordered--${useEffectColor}-70`]
  }

  function renderChunk (chunk, index) {
    return (
      <BorderedBox color={TRANSPARENT} backgroundColor={borderColor} backgroundColorOpacity={OPACITY_30} classes={chunkClasses} key={index} bor>
        <div className={styles.chunkContent}>
          <span className={`${inputTextClassName} ${styles.chunkText} `}>{chunk}</span>
          <ButtonFullRounded
            iconName='CircleCloseIcon'
            iconSize={SMALL}
            iconColor={WHITE}
            buttonClassName={buttonClassName}
            onClick={() => handleRemove(chunk)}
            bordered={false}
            alt='Close'
          />
        </div>
      </BorderedBox>
    )
  }

  function handleFocus () {
    if (!disabled) {
      setFocus(true)
    }
  }

  function handleBlur () {
    if (!disabled) setFocus(false)
  }

  return (
    <div className={inputStyles.container}>
      <div className={styles.container}>
        <div className={inputContainerClassName}>
          {beforeIcon && <PlatformaticIcon iconName={beforeIcon.iconName} size={beforeIcon.size} data-testid='before-icon' color={beforeIcon.color} onClick={null} />}
          {chunks.map((value, index) => renderChunk(value, index))}
          <input
            type='text'
            name={name}
            value={value}
            placeholder={chunks.length > 0 ? '' : placeholder}
            className={inputClassName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
          />
        </div>
        {afterIcon &&
          (
            <ButtonFullRounded
              className={styles.smallPadding}
              iconName={afterIcon.iconName}
              iconColor={afterIcon.color}
              data-testid='after-icon'
              onClick={afterIcon.handleClick}
              iconSize={MEDIUM}
              hoverEffect={DULLS_BACKGROUND_COLOR}
              disabled={afterIcon.disabled}
            />
          )}
      </div>
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
    </div>
  )
}

export default InputWithSeparator
