import GithubLogo from '@/cmpt/icons/github-logo'
import WebsiteIcon from '@/cmpt/icons/website'

import './project-links.scss'

const WebsiteLink = ({ href }) => (
  <a href={href} target="_blank">
    <WebsiteIcon />
  </a>
)

const GithubSource = ({ href }) => (
  <a href={href} target="_blank">
    <GithubLogo />
  </a>
)

const ProjectLinks = ({ github, website }) => {
  const projectLinks = []
  if (github) {
    projectLinks.push(
      <li key="github">
        <GithubSource href={`https://github.com${github}`} />
      </li>
    )
  }
  if (website) {
    projectLinks.push(
      <li key="website">
        <WebsiteLink href={`https://${website}`} />
      </li>
    )
  }

  return <ul className="reset project-links">{projectLinks}</ul>
}

export default ProjectLinks
