import Head from 'next/head'
import Nav from './components/nav'
import Staff from './components/staff'

export default function News() {
  return (
    <>
      <Head>
        <title>Dasada | Staff</title>
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
        <Staff />
      </div>
    </>
  )
}
