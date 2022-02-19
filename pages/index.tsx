import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>SaaS Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />

    </div>
  )
}