import { kebabCase } from 'change-case'
import ClickableSubheader from '@/cmpt/clickable-subheader'
import MoreInfo, { MoreInfoMain, MoreInfoDetails } from '@/cmpt/more-info'
import { nbsp } from '@/utils'
import * as details from './details'

import './index.scss'

const SideProjects = () => {
  const projects = [
    ['Common FP', details.CommonFP],
    ['Condo Budget Graphs', details.CondoBudgetGraphs],
    ['Pass The Quill', details.PassTheQuill],
    ['Beer KB', details.BeerKB],
    ['nch', details.Nch],
    ['SQLite To Rest', details.SqliteToRest],
    ['lilyvm', details.LilyVM],
  ].map(([title, DetailsCmpt]) => {
    const id = kebabCase(title)

    return (
      <li key={id} id={id}>
        <MoreInfo>
          <MoreInfoMain>{title}</MoreInfoMain>
          <MoreInfoDetails>
            <DetailsCmpt />
          </MoreInfoDetails>
        </MoreInfo>
      </li>
    )
  })

  return (
    <section id="side-projects">
      <ClickableSubheader text="Side Projects" />

      <p>
        {`
        The following are personal projects built on my own${nbsp}time
        `}
      </p>

      <ul className="reset project-list">{projects}</ul>
    </section>
  )
}

export default SideProjects
