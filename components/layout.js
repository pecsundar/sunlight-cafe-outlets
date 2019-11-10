import React from 'react'
import Head from 'next/head'
import Header from './header'
import Branch from './branch'

const Layout = props => (
  <React.Fragment>
    <Head>
      <title>Sunlight - Cafe</title>
    </Head>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        max-width: 75rem;
        margin: 1.5rem auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    `}</style>
    <Header location={props.location}/>
    <Branch location={props.location}/>

    <main>
      <div className='container'>{props.children}</div>
    </main>
  </React.Fragment>
)

export default Layout