import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

export default ({ children, title = 'My Blogus funny blog!' }) => (
  <div style={styles.body}>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Peddana" rel="stylesheet"/>
    </Head>
    <style jsx>{`
      @font-face {
        font-family: 'Charis';
          url('../src/CharisSIL-R.woff') format('woff'),
      }
    `}</style>
    <div style={styles.main}>
      <header style={styles.header}>
        <Logo />
      </header>
      <div style={styles.content}>

        { children }

      </div>
      <Footer text="Clay Morton clay.morton@gmail.com @Lyonsclay github/Lyonsclay" />
    </div>
  </div>
)

const styles = {
  body: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    /* border: '2px solid orange',*/
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50%',
    border: '2px solid pink',
    minHeight: '100vh',
    fontFamily: 'Droid Serif',
    fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    color: 'gray',
    textDecoration: 'none',
  },
}
