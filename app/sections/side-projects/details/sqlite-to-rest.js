import { nbsp } from '@/utils'
import ProjectLinks from '../project-links'

const CommonFP = () => (
  <>
    <ProjectLinks github="/olsonpm/sqlite-to-rest" />
    <h3>What is it?</h3>
    <p>
      A library allowing you to easily create a RESTful API from an existing
      SQLite{nbsp}database.
    </p>

    <h3>Why create it?</h3>
    <p>
      {`
      I wanted to learn how to build a proper Node web API, and building a CRUD
      interface to a database sounded like an interesting way to do that. I
      chose SQLite to keep things simple, and I chose a relational database
      because NoSQL feels too${nbsp}trendy.
      `}
    </p>
  </>
)

export default CommonFP
