import React from 'react'
import Icons from './icons'
import { ERROR_RED, MAIN_GREEN, WARNING_YELLOW } from './constants'
import styles from './Report.module.css'

function getIcon (type) {
  switch (type) {
    case 'success':
      return <Icons.CircleCheckMarkIcon color={MAIN_GREEN} />
    case 'error':
      return <Icons.CircleCheckMarkIcon color={ERROR_RED} />
    case 'warning':
      return <Icons.AlertIcon color={WARNING_YELLOW} />
  }
}
function Step ({
  type,
  label
}) {
  return (
    <div className={styles.step}>
      {getIcon(type)}
      <span>{label}</span>
    </div>
  )
}
export default function Report ({
  steps = []
}) {
  function renderSteps () {
    return steps.map((s, idx) => {
      return <Step key={`report-step-${idx}`} {...s} />
    })
  }
  return (
    <div className={styles.container}>
      {renderSteps()}
    </div>

  )
}
