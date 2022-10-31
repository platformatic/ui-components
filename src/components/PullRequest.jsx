'use strict'
import React from 'react'
import BorderedBox from './BorderedBox'
import HorizontalSeparator from './HorizontalSeparator'
import PullRequestIcon from './icons/PullRequestIcon'
import styles from './PullRequest.module.css'
import TextWithLabel from './TextWithLabel'
import VerticalSeparator from './VerticalSeparator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopCircle, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Status from './Status'
export default function PullRequest ({ id, title, lastCommit, url, status, onStop, onReload }) {
  let prStatusColor
  if (status === 'available') {
    prStatusColor = 'white'
  } else if (status === 'running') {
    prStatusColor = 'green'
  } else if (status === 'unavailable') {
    prStatusColor = 'white'
  }

  function handleStop () {
    if (onStop) {
      onStop()
    }
  }
  function handleReload () {
    if (onReload) {
      onReload()
    }
  }
  return (
    <div className={status === 'unavailable' ? styles.unavailable : null}>
      <BorderedBox color={prStatusColor}>
        <div className={styles.header}>
          <div className={styles.title}>
            <PullRequestIcon />
            <span className={styles.id}>#{id}</span>
            <span><a href={url} target='_blank' rel='noreferrer'>{url}</a></span>
          </div>
          <div className={styles.status}>
            <Status color={prStatusColor} status={status} />
            <VerticalSeparator />
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faStopCircle} mask={['circle']} onClick={handleStop} />
              <FontAwesomeIcon icon={faRotateRight} mask={['circle']} onClick={handleReload} />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <TextWithLabel label='PR Title' text={title} />
        </div>

        <HorizontalSeparator />
        <div className={styles.footer}>
          <TextWithLabel label='Last commit by' text={lastCommit.author} />
          <VerticalSeparator />
          <TextWithLabel label='Commit SHA' text={lastCommit.sha} />
          <VerticalSeparator />
          <TextWithLabel label='Last Update' text={lastCommit.date} />
        </div>
      </BorderedBox>
    </div>

  )
}
