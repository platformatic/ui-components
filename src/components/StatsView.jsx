'use strict'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import styles from './StatsView.module.css'
import HorizontalSeparator from './HorizontalSeparator'
import VerticalSeparator from './VerticalSeparator'
import StatValue from './StatValue'
import React from 'react'
export default function StatsView (props) {
  const { title, stats } = props
  const mainStat = stats.mainStat
  const otherStats = stats.otherStats
  return (
    <>
      <div className={styles['stats-header']}>
        <span className='text-xl'>{title}</span>
        <FontAwesomeIcon icon={faCircleInfo} className='text-white' />
      </div>
      <div className={styles['stats-content']}>
        {mainStat && (
          <div className={styles['stats-main-stat']}>
            <StatValue pre={mainStat.pre} label={mainStat.label} color={mainStat.color} value={mainStat.value} />
          </div>
        )}
        {otherStats && (
          <>
            <HorizontalSeparator />
            <div className='flex items-center justify-around'>
              <div className={styles['stats-main-stat']}>
                <StatValue pre={otherStats[0].pre} label={otherStats[0].label} color={otherStats[0].color} value={otherStats[0].value} />
              </div>

              <VerticalSeparator />
              <div className={styles['stats-main-stat']}>
                <StatValue pre={otherStats[1].pre} label={otherStats[1].label} color={otherStats[1].color} value={otherStats[1].value} />
              </div>
            </div>

          </>

        )}
      </div>

    </>
  )
}
