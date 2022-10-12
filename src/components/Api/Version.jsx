'use strict'

import BorderedText from '../BorderedText'

export default function ApiVersion (props) {
  const { version } = props
  return (<div className='font-light'><BorderedText text={`v${version}`} /></div>)
}
