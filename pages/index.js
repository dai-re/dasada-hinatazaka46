import Head from 'next/head'
import Nav from './components/nav'
import Hero from './components/hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dasada</title>
        <meta name="description" content="Dasada hinatazaka web store" />
        <meta name='author' content='dai re, me@daire.eu.org' />
        <meta name='og:title' content='Dasada' />
        <meta name='og:description' content='Dasada hinatazaka web store' />
        <meta name='og:image' content='/ogimage.jpg' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Nav />
        <Hero />
      </div>
    </>
  )
}
