import { nbsp } from '@/utils'
import ProjectLinks from '../project-links'

const PassTheQuill = () => (
  <>
    <ProjectLinks
      github="/olsonpm/passthequill.com"
      website="test.passthequill.com"
    />
    <h3>What is it?</h3>
    <p>
      {`
      A simple two-player word game that I initially created for pen
      and${nbsp}paper.
      `}
    </p>

    <h3>Why create it?</h3>
    <p>
      {`
      I wanted to build my game and learn a few technologies along the way.
      This time the new tech was Vue, SSR, how to configure an email server,
      CouchDB, and how to organize the frontend to coordinate animations.
      This game is easily the most fun project I've worked${nbsp}on.
      `}
    </p>
  </>
)

export default PassTheQuill
