import React from 'react'
import Tag from './Tag'
import styles from './Tag.module.css'
import { OPACITY_30, SMALL } from './constants'

export default function ExperimentalTag () {
  const color = 'tertiary-blue'
  return (
    <Tag
      backgroundColor={color}
      text='EXPERIMENTAL'
      color={color}
      bordered={false}
      opaque={OPACITY_30}
      paddingClass={styles.experimentalPadding}
      fullRounded
      platformaticIcon={{ iconName: 'LabIcon', color, size: SMALL }}
    />
  )
}
