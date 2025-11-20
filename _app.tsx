import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor />
      <Header />
      <main className="min-h-[70vh]"><Component {...pageProps} /></main>
      <Footer />
    </>
  )
}
