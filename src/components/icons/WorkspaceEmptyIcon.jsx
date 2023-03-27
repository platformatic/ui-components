import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const WorkspaceEmptyIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'extra-large':
      icon = (
        <svg width={104} height={105} viewBox='0 0 104 105' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
          <path d='M29.8467 60.0705V87.4275C29.8467 87.9797 30.2944 88.4275 30.8467 88.4275H73.1544C73.7067 88.4275 74.1544 87.9797 74.1544 87.4275V60.0705' stroke='none' strokeWidth={3} strokeLinecap='round' />
          <rect x={44.616} y={88.4272} width={14.7692} height={7.08923} stroke='none' strokeWidth={3} />
          <path d='M37.2312 96.5165C37.2312 95.9642 37.6789 95.5165 38.2312 95.5165H65.7697C66.3219 95.5165 66.7697 95.9642 66.7697 96.5165V100.833H37.2312V96.5165Z' stroke='none' strokeWidth={3} />
          <path d='M24.3076 74.9872H11.3845V49.1411' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M37.2307 44.8334V19.6026' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M79.6924 74.9872H92.6155V60.218' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M63.0769 44.8334V34.8334H76V23.2949' stroke='none' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx={11.3846} cy={41.7565} rx={7.38462} ry={7.38462} stroke='none' strokeWidth={3} />
          <ellipse cx={37.2308} cy={12.218} rx={7.38461} ry={7.38462} stroke='none' strokeWidth={3} />
          <ellipse cx={76.0001} cy={15.9103} rx={7.38462} ry={7.38461} stroke='none' strokeWidth={3} />
          <ellipse cx={92.6153} cy={52.8334} rx={7.38462} ry={7.38461} stroke='none' strokeWidth={3} />
          <rect x={36} y={52.8334} width={10.6667} height={11.7483} rx={1} stroke='none' strokeWidth={3} />
          <rect x={52} y={52.8334} width={16} height={11.7483} rx={1} stroke='none' strokeWidth={3} />
          <rect x={68} y={80.8334} width={10.6667} height={11.7483} rx={1} transform='rotate(-180 68 80.8334)' stroke='none' strokeWidth={3} />
          <rect x={52} y={80.8334} width={16} height={11.7483} rx='1' transform='rotate(-180 52 80.8334)' stroke='none' strokeWidth={3} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

WorkspaceEmptyIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

WorkspaceEmptyIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default WorkspaceEmptyIcon
