import styles from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Button ({ icon, label, onClick, primary, color, ...props }) {
  let buttonClass = 'primary'
  if (!primary) {
    buttonClass = 'secondary'
  }

  let colorClass = 'green'
  if (color === 'red') {
    colorClass = 'red'
  }
  return (
    <button className={`${styles.button} ${styles[buttonClass + '-' + colorClass]}`}>
      {icon ? <FontAwesomeIcon icon={icon} className='mr-2' data-testid='button-icon' /> : null}
      <span>{label}</span>
    </button>
  )
}
