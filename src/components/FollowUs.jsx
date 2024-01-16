import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './FollowUs.module.css'
import Icons from './icons'
import { MAIN_GREEN, WHITE, MEDIUM, SMALL, MAIN_DARK_BLUE, LIGHT_GREEN } from './constants'

function SocialElement ({ href, iconName, iconClassName, iconColor, iconSize }) {
  const [hover, setHover] = useState(false)

  const icon = React.createElement(Icons[`${iconName}`], {
    color: iconColor,
    size: iconSize,
    tip: '',
    inactive: !hover
  })

  return (
    <div className={iconClassName} onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {icon}
      </a>
    </div>
  )
}

function FollowUs ({
  label,
  labelClassName,
  useOnFrontpage,
  iconColor,
  iconSize,
  socialElements
}) {
  const suffix = useOnFrontpage ? 'Frontpage' : 'Dashboard'
  const className = styles[`container${suffix}`]
  const iconClassName = styles[`icon${suffix}`]

  return (
    <div className={className}>
      <div className={labelClassName}>
        {label}
      </div>

      {socialElements.map(socialElement =>
        <SocialElement
          key={socialElement.link}
          href={socialElement.link}
          iconName={socialElement.iconName}
          iconClassName={iconClassName}
          iconColor={iconColor}
          iconSize={iconSize}
        />
      )}
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
  iconSize: PropTypes.oneOf([MEDIUM, SMALL]),
  /**
   * socialElements
   */
  socialElements: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
  }))
}

FollowUs.defaultProps = {
  label: 'Follow us on',
  labelClassName: '',
  useOnFrontpage: true,
  iconColor: WHITE,
  iconSize: MEDIUM,
  socialElements: [{
    link: 'https://twitter.com/platformatic',
    iconName: 'SocialXIcon'
  }, {
    link: 'https://www.linkedin.com/company/platformatic/',
    iconName: 'SocialLinkedInIcon'
  }, {
    link: 'https://github.com/platformatic',
    iconName: 'SocialGitHubIcon'
  }, {
    link: 'https://discord.gg/platformatic',
    iconName: 'SocialDiscordIcon'
  }]

}
export default FollowUs
