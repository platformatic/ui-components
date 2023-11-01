import React from 'react'
import PropTypes from 'prop-types'
import styles from './FollowUs.module.css'
import Icons from './icons'
import { MAIN_GREEN, WHITE, MEDIUM, SMALL, MAIN_DARK_BLUE, LIGHT_GREEN } from './constants'

function FollowUs ({ label, labelClassName, useOnFrontpage, iconColor, iconSize, labelColor }) {
  const suffix = useOnFrontpage ? 'Frontpage' : 'Dashboard'
  const className = styles[`container${suffix}`]
  const iconClassName = styles[`icon${suffix}`]

  return (
    <div className={className}>
      <div className={labelClassName}>
        {label}
      </div>
      <div className={iconClassName}>
        <a href='https://twitter.com/platformatic' target='_blank' rel='noopener noreferrer'>
          <Icons.SocialXIcon color={iconColor} size={iconSize} />
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
   * labelClassName
   */
  labelClassName: PropTypes.string,
  /**
   * frontPageAspect
   */
  frontPageAspect: PropTypes.bool,
  /**
   * labelColor
   */
  labelColor: PropTypes.oneOf([LIGHT_GREEN, WHITE, MAIN_DARK_BLUE]),
  /**
   * iconColor
   */
  iconColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE, MAIN_GREEN]),
  /**
   * iconSize
   */
  iconSize: PropTypes.oneOf([MEDIUM, SMALL])
}

FollowUs.defaultProps = {
  label: 'Follow us on',
  useOnFrontpage: true,
  labelColor: LIGHT_GREEN,
  iconColor: WHITE,
  iconSize: MEDIUM
}
export default FollowUs
