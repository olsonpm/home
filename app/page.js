import { AboutMe, Header, MyStack, SideProjects } from './sections'

import './page.scss'

const metadata = {
  title: 'Phil Olson',
  description:
    'An informal supplement to my resume that emphasizes personal projects',
}

const HomePage = () => (
  <>
    <div className="site-content">
      <Header />
      <main>
        <AboutMe />
        <MyStack />
        <SideProjects />
      </main>
    </div>
  </>
)

export { metadata }
export default HomePage
