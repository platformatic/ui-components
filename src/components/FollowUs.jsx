import React, { useState } from 'react'
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
  label = 'Follow us on',
  labelClassName = '',
  useOnFrontpage = true,
  iconColor = WHITE,
  iconSize = MEDIUM,
  socialElements = [{
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

export default FollowUs
