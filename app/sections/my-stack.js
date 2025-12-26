import ClickableSubheader from '@/cmpt/clickable-subheader'
import { nbsp } from '@/utils'

const MyStack = () => (
  <section id="my-stack">
    <ClickableSubheader text="My Stack" />

    <h3>Front end</h3>
    <p>
      I have the most experience with React and Next.js, and some experience
      with Vue and Angular.
    </p>

    <h3>Backed by</h3>
    <p>
      {`
      Node is my only preference.  I've used a few cloud providers for
      infrastructure, including AWS and Azure, both SQL and NoSQL databases,
      Redis for caching, and plenty of other supporting backend technologies.
      `}
    </p>

    <h3>Testing</h3>
    <p>Mocha, Chai and Jest</p>
    <p className="sidenote">
      {`
      My main experience with testing is writing unit and backend integration
      tests.  I haven't dedicated time to learning e2e and have only briefly
      worked with Jest for the frontend. I would enjoy the opportunity to work
      with more of these${nbsp}tools.
      `}
    </p>

    <h3>Preferred OS</h3>
    <p>
      {`
      Any flavor of Linux. OSX is Linux'y enough.
      `}
    </p>
  </section>
)

export default MyStack
