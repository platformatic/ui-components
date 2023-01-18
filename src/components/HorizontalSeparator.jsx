'use strict'
import React from 'react'
export default function HorizontalSeparator ({ marginTop = 4, marginBottom = 4 }) {
  function getClassName () {
    return 'text-dark-green ' + (marginTop === marginBottom ? `my-${marginTop}` : `mt-${marginTop} mb-${marginBottom}`)
  }

  return <hr className={getClassName()} />
}
