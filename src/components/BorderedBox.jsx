'use strict'

import { getColor } from '../lib/utils'

export default function BorderedBox (props) {
  const { classes, color, children } = props
  const borderColor = getColor('border', color)

  return (
    <div className={`bordered-box ${classes} ${borderColor}`}>
      {children}
    </div>
  )
}
