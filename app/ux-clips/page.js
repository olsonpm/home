import Sections from './sections'

import './page.scss'

const metadata = {
  title: 'Phil Olson - UX Clips',
  description: 'Short videos of my personal project user experiences',
  robots: {
    index: false,
  },
}

const UxClips = () => (
  <>
    <main className="site-content" id="page-ux-clips">
      <h1>UX Clips</h1>
      <p>
        {`
        The following are clips of user experiences I've built in my personal
        projects. Most designs are my own - the good and the ugly :)
        `}
      </p>

      <nav className="main-nav">
        <ol className="reset">
          <li>
            <a href="#common-fp">Common FP</a>
          </li>
          <li>
            <a href="#pass-the-quill">Pass The Quill</a>
          </li>
          <li>
            <a href="#condo-budget-graphs">Condo Budget Graphs</a>
          </li>
        </ol>
      </nav>

      <Sections />
    </main>
  </>
)

export { metadata }
export default UxClips
