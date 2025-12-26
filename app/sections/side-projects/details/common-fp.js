import { nbsp } from '@/utils'
import ProjectLinks from '../project-links'

const CommonFP = () => (
  <>
    <ProjectLinks github="/common-fp/common-fp" website="common-fp.org" />
    <h3>What is it?</h3>
    <p>
      A functional utility library with generic data structure support and a
      good developer{nbsp}experience.
    </p>

    <h3>Why create it?</h3>
    <p>
      {`
      I wanted a utility library that supports data structures generically.  For
      instance, a function \`mapValues\` to map over the values of an array,
      object, Map or Set. Common FP does this while exposing a functional API
      intended for a wider audience. I hope that by limiting functional jargon,
      sticking to intuitive concepts, and providing a modern in-browser code
      editor with an example for every utility, more devs will feel comfortable
      with Common${nbsp}FP.
      `}
    </p>
  </>
)

export default CommonFP
