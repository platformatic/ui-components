'use strict'
import React from 'react'
import BorderedBox from './BorderedBox'
import HorizontalSeparator from './HorizontalSeparator'
import PullRequestIcon from './icons/PullRequestIcon'
import styles from './PullRequest.module.css'
import VerticalSeparator from './VerticalSeparator'
export default function PullRequest ({ id, title, lastCommit, url }) {
  return (
    <BorderedBox color='green'>
      <div className={styles.header}>
        <PullRequestIcon />
        <span className={styles.id}>#{id}</span>
        <span><a href={url} target='_blank' rel='noreferrer'>{url}</a></span>
      </div>
      <div className={styles.content}>
        <div>
          <span className={styles.label}>PR Title: </span>
          <span className={styles.value}>{title}</span>
        </div>
      </div>

      <HorizontalSeparator />
      <div>
        <span className={styles.label}>Last commit by: </span>
        <span className={styles.value}>{lastCommit.author}</span>
        <VerticalSeparator />
        <span className={styles.label}>Commit SHA: </span>
        <span className={styles.value}>{lastCommit.sha}</span>
        <VerticalSeparator />
        <span className={styles.label}>Last Update: </span>
        <span className={styles.value}>{lastCommit.date}</span>
      </div>
    </BorderedBox>
  )
}
