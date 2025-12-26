import { nbsp } from '@/utils'
import ProjectLinks from '../project-links'

const CondoBudgetGraphs = () => {
  const nivoLine = (
    <a target="_blank" href="https://nivo.rocks/line/">
      @nivo/line
    </a>
  )
  return (
    <>
      <ProjectLinks
        github="/olsonpm/condo-budget-graphs-demo"
        website="olsonpm.github.io/condo-budget-graphs-demo/"
      />
      <h3>What is it?</h3>
      <p>
        A website displaying demo budget data for our condo. The production site
        requires authentication and is built off Excel{nbsp}spreadsheets.
      </p>
      <p>
        This site uses the Vite framework, {nivoLine} for the graphs, and
        Material UI for the components.
      </p>

      <h3>Why create it?</h3>
      <p>
        {`
        I'm the treasurer at my condo and wanted a way to both easily view the
        spreadsheet data and convey it to residents.
        `}
      </p>
    </>
  )
}

export default CondoBudgetGraphs
