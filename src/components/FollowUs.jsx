import React from 'react'
import PropTypes from 'prop-types'
import styles from './FollowUs.module.css'
import Icons from './icons'
import { MAIN_GREEN, WHITE, MEDIUM, SMALL } from './constants'

function FollowUs ({ label, useOnFrontpage }) {
  const suffix = useOnFrontpage ? 'Frontpage' : 'Dashboard'
  const iconColor = useOnFrontpage ? WHITE : MAIN_GREEN
  const iconSize = useOnFrontpage ? MEDIUM : SMALL
  const className = styles[`container${suffix}`]
  const iconClassName = styles[`icon${suffix}`]
  const labelClassName = styles[`label${suffix}`]

  return (
    <div className={className}>
      <div className={labelClassName}>
        {label}
      </div>
      <div className={iconClassName}>
        <a href='https://twitter.com/platformatic' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialTwitterIcon color={iconColor} size={iconSize} />
        </a>
      </div>
      <div className={iconClassName}>
        <a href='https://www.linkedin.com/company/platformatic/' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialLinkedInIcon color={iconColor} size={iconSize} />
        </a>
      </div>
      <div className={iconClassName}>
        <a href='https://github.com/platformatic' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialGitHubIcon color={iconColor} size={iconSize} />
        </a>
      </div>
      <div className={iconClassName}>
        <a href='https://discord.gg/platformatic' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialDiscordIcon color={iconColor} size={iconSize} />
        </a>
      </div>
    </div>
  )
}

FollowUs.propTypes = {
  /**
   * label
   */
  label: PropTypes.string,
  /**
   * frontPageAspect
   */
  frontPageAspect: PropTypes.bool
}

FollowUs.defaultProps = {
  label: 'Follow us on',
  useOnFrontpage: true
}
export default FollowUs
