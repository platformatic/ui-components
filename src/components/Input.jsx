'use strict'
import styles from './Input.module.css'
import commonStyles from './Common.module.css'
export default function Input ({ placeholder, value, name }) {
  return (
    <div className={`${styles.inputContainer} ${commonStyles.padded}`}>
      <input type='text' name={name} value={value} placeholder={placeholder} className='grow' />
    </div>
  )
}
