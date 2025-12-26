import { nbsp } from '@/utils'
import ProjectLinks from '../project-links'

const CommonFP = () => {
  const lilypond = (
    <a target="_blank" href="https://lilypond.org/">
      LilyPond
    </a>
  )
  const nvm = (
    <a target="_blank" href="https://github.com/nvm-sh/nvm">
      nvm
    </a>
  )
  const pyenv = (
    <a target="_blank" href="https://github.com/pyenv/pyenv">
      pyenv
    </a>
  )
  const rvm = (
    <a target="_blank" href="https://rvm.io/">
      rvm
    </a>
  )
  const lilybin = (
    <a target="_blank" href="https://github.com/LilyBin/LilyBin">
      LilyBin
    </a>
  )

  return (
    <>
      <ProjectLinks github="/olsonpm/lilyvm" />
      <h3>What is it?</h3>
      <p>
        A {lilypond} version manager similar to {nvm}, {pyenv}, {rvm}, etc.
      </p>

      <h3>Why create it?</h3>
      <p>
        Initially, my goal was to enhance {lilybin}&apos;s functionality, but
        their LilyPond version constraints held me back. I am confident in Bash
        and wanted to more fully understand how version management{nbsp}works.
      </p>
    </>
  )
}

export default CommonFP
