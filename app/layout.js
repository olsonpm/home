import { ThemeProvider } from 'next-themes'
import TopBar from './cmpt/top-bar'

import './styles/site.scss'

const metadata = {
  icons: {
    icon: [
      { url: '/images/favicon.16.png', sizes: '16x16' },
      { url: '/images/favicon.32.png', sizes: '32x32' },
    ],
  },
  openGraph: {
    images: '/images/for-linkedin.png',
  },
}

const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const layout = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <ThemeProvider disableTransitionOnChange={true}>
        <TopBar />
        {children}
      </ThemeProvider>
    </body>
  </html>
)

export { metadata, viewport }
export default layout
