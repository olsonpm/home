'use client'

import ProfileDarkImg from '../images/profile_dark.avif'
import ProfileLightImg from '../images/profile_light.avif'
import { nbsp } from '@/utils'

import './header.scss'

const Header = () => (
  <header>
    <p className="hello">Hello,</p>
    <img
      src={ProfileDarkImg.src}
      className="theme-dark"
      alt="profile picture"
    />
    <img
      src={ProfileLightImg.src}
      className="theme-light"
      alt="profile picture"
    />
    <h1>My name is Phil, and I enjoy developing for the web</h1>

    <p className="note">
      {`
      This site is an informal supplement to my resume emphasizing
      personal${nbsp}projects.
      `}
    </p>

    <nav className="main-nav">
      <ol className="reset">
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#my-stack">My Stack</a>
        </li>
        <li>
          <a href="#side-projects">Side Projects</a>
        </li>
      </ol>
    </nav>
  </header>
)

export default Header
