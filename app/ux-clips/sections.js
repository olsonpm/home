'use client'

import ClickableSubHeader from '@/cmpt/clickable-subheader'
import { nbsp } from '@/utils'
import cbg from './videos/cbg-ux.mp4'
import cfp from './videos/cfp-ux.mp4'
import ptq from './videos/ptq-ux.mp4'
import peachPieStudioClip from './videos/peach-pie-studio-ux.mp4'
import peachPieWebTemplateClip from './videos/peach-pie-web-template-ux.mp4'

import './sections.scss'

const clipPath = {
  cbg,
  cfp,
  ptq,
  peachPie: {
    studio: peachPieStudioClip,
    webTemplate: peachPieWebTemplateClip,
  },
}

const Sections = () => (
  <>
    <section id="peach-pie">
      <ClickableSubHeader text="Peach Pie" />
      <p>
        {`
          This is a restaurant CMS I've been working on.  The idea being I
          create and pitch templates which are easy to edit for
          normal${nbsp}folk.
        `}
      </p>
      <p>
        {`
          Note the goal is not to be another generic CMS, for example
          restaurant managers can update verbage and images, but not the
          overall${nbsp}design.
        `}
      </p>
      <p>{`Here's some important tooling I used:`}</p>
      <ul className="peach-pie-tooling">
        <li>
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>
        </li>
        <li>
          <a href="https://better-auth.com/" target="_blank">
            Better Auth
          </a>
        </li>
        <li>
          <a href="https://www.postgresql.org/" target="_blank">
            PostgreSQL
          </a>
        </li>
        <li>
          <a href="https://stripe.com/" target="_blank">
            Stripe
          </a>
        </li>
        <li>
          <a href="https://hono.dev/" target="_blank">
            Hono
          </a>
        </li>
        <li>
          <a href="https://www.dragonflydb.io/" target="_blank">
            Dragonfly
          </a>
        </li>
        <li>
          <a href="https://seaweedfs.com/" target="_blank">
            SeaweedFS
          </a>
        </li>
      </ul>

      <p className="peach-pie-web-template">
        {`
          This video shows some features of Peach Pie.  Specifically I sign up,
          create a support ticket, add a Stripe payment method, and finally
          delete my${nbsp}account.
        `}
      </p>
      <video id="peach-pie-studio-ux" src={clipPath.peachPie.studio} controls />

      <p className="peach-pie-web-template">
        {`
          Here's a an example template I built along with a few editing
          capabilities.  Eventually this will be integrated into Peach Pie
          Studio as a${nbsp}service.
        `}
      </p>
      <video
        id="peach-pie-web-template-ux"
        src={clipPath.peachPie.webTemplate}
        controls
      />
    </section>
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
