import '../src/index.css'
import '../src/styles/general.scss'
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/Footer'

export const metadata = {
  title: 'Boring Technologies',
  description: 'A software development company that specializes in creating innovative and efficient solutions for businesses and individuals.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
