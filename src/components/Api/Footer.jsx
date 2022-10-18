'use strict'
import Separator from '../VerticalSeparator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faFileLines, faGear } from '@fortawesome/free-solid-svg-icons'
import BorderedText from '../BorderedText'
import styles from './Footer.module.css'
export default function ApiFooter (props) {
  const { graphql, openapi } = props
  return (
    <div className={styles.footer}>
      <div className='flex gap-2'>
        {graphql && (<BorderedText text='GraphQL' />)}
        {openapi && (<BorderedText text='REST' />)}
      </div>
      <div>
        <span><FontAwesomeIcon icon={faGear} /> Configs</span>
        <Separator />
        <span><FontAwesomeIcon icon={faFileLines} /> API Docs</span>
        <Separator />
        <span><FontAwesomeIcon icon={faDatabase} /> SQLite</span>
      </div>
    </div>
  )
}
