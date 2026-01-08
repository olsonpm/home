import { nbsp } from '@/utils'
import ProjectLinks from '../project-links'

const BeerKB = () => (
  <>
    <ProjectLinks github="/olsonpm/beerkb" website="beerkb.philipolsonm.com" />
    <h3>What is it?</h3>
    <p>
      {`An interactive website allowing you to modify beer data stored in a `}
      SQLite To Rest &nbsp;instance.
    </p>

    <h3>Why create it?</h3>
    <p>
      {`
      To showcase sqlite-to-rest, present some front-end code, and learn
      Nunjucks, a templating engine that can be used on both the front and
      back${nbsp}ends.
      `}
    </p>
  </>
)

export default BeerKB
