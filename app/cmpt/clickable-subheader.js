import { kebabCase } from 'change-case'

import './clickable-subheader.scss'

const ClickableSubheader = ({ anchorId, text }) => {
  const id = anchorId ?? kebabCase(text)
  return (
    <a className="clickable-subheader" href={`#${id}`}>
      <h2>
        {text} <span className="hashtag">#</span>
      </h2>
    </a>
  )
}

export default ClickableSubheader
