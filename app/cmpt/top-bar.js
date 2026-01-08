import { email } from '@/config'
import IconGithubLogo from './icons/github-logo'
import ThemeSelector from './theme-selector'

import './top-bar.scss'

const TopBar = () => (
  <div className="top-bar">
    <div className="site-content">
      <a className="email" href={`mailto:${email}`}>
        {email}
      </a>
      <a
        className="github"
        href="https://github.com/olsonpm"
        title="See my github profile"
        target="_blank"
      >
        <IconGithubLogo />
      </a>
      <ThemeSelector />
    </div>
  </div>
)

export default TopBar
