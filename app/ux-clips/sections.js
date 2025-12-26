'use client'

import ClickableSubHeader from '@/cmpt/clickable-subheader'
import cbg from './videos/cbg-ux.mp4'
import cfp from './videos/cfp-ux.mp4'
import ptq from './videos/ptq-ux.mp4'

import './sections.scss'

const clipPath = { cbg, cfp, ptq }

const Sections = () => (
  <>
    <section id="common-fp">
      <ClickableSubHeader text="Common FP" />
      <p>
        This is my functional utility library, which approaches data structures
        generically. The following is a clip of its website, featuring an
        in-browser editor, allowing you to safely and quickly try it&nbsp;out.
      </p>
      <p>
        The website is built with{' '}
        <a
          target="_blank"
          href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation"
        >
          Next.js using SSG
        </a>
        . Components and design are my&nbsp;own.
      </p>
      <video id="cfp-ux" src={clipPath.cfp} controls />
    </section>
    <section id="pass-the-quill">
      <ClickableSubHeader text="Pass The Quill" />
      <p>
        This is a word game I made a long time ago. The video below shows me
        playing against myself to demonstrate the UX. I&apos;m proud of how the
        game feels like a native&nbsp;app.
      </p>
      <p>
        Credit to my friend{' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ryan-grebinski-77b2a46a/"
        >
          Ryan Grebinski
        </a>{' '}
        for the awesome logo. Outside of the logo, the components and design are
        my own using Vue with&nbsp;SSR.
      </p>
      <video id="ptq-ux" src={clipPath.ptq} controls />
    </section>
    <section id="condo-budget-graphs">
      <ClickableSubHeader text="Condo Budget Graphs" />
      <p>
        I&apos;m the treasurer at my condo and built this site to convey our
        budget to residents. The clip shows demo data. The production site
        requires authentication and is built off Excel spreadsheets.
      </p>
      <p>
        The components are Material UI, the graph is built with{' '}
        <a target="_blank" href="https://nivo.rocks/line/">
          @nivo/line
        </a>
        , and the framework is{' '}
        <a target="_blank" href="https://vite.dev/">
          vite
        </a>
        .
      </p>
      <video id="cbg-ux" src={clipPath.cbg} controls />
    </section>
  </>
)

export default Sections
