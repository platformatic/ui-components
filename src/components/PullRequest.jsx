'use strict'
import React from 'react'
import BorderedBox from './BorderedBox'
import HorizontalSeparator from './HorizontalSeparator'
import PullRequestIcon from './icons/PullRequestIcon'
import styles from './PullRequest.module.css'
import TextWithLabel from './TextWithLabel'
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
  )
}
