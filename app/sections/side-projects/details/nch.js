import { nbsp } from '@/utils'
import ProjectLinks from '../project-links'

const CommonFP = () => (
  <>
    <ProjectLinks github="/olsonpm/nss-certutil-helpers" />
    <h3>What is it?</h3>
    <p>
      Nch stands for NSS Certutil Helpers and serves as a user-friendly,
      narrowly focused command-line wrapper for certutil. Its goal is to allow
      for easy mutual SSL authentication{nbsp}creation.
    </p>

    <h3>Why create it?</h3>
    <p>
      {`
      The command line experience for both openssl and certutil is abysmal.
      Although my CLI has a limited scope, its use is intuitive. The repo
      doubles as a tutorial since existing documentation for mutual SSL
      authentication lacks clear${nbsp}examples.
      `}
    </p>
  </>
)

export default CommonFP
