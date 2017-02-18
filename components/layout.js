import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'My Blogus funny blog!' }) => (
  <div style={styles.body}>
  <div style={styles.main}>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <script href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet"/>
    </Head>
    <header >
      <nav style={styles.menu}>
        <Link href='/'><a>Home</a></Link>
        <Link href='/happy'><a>The Shadow Dom</a></Link>
        <Link href='/contact'><a>Worm Holes</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      Clay Morton clay.morton@gmail.com @Lyonsclay github/Lyonsclay
    </footer>
  </div>
  </div>
)

const styles = {
  body: {
     display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  main: {
    flexDirection: 'column',
    border: '2px solid pink',
    maxWidth: 900,
    minWidth: '50%',
  },
  menu: {
    fontFamily: 'Droid Serif',
    fontSize: 38,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid gray',
    backgroundColor: 'lightblue',
  },
  link: {
    color: 'gray',
    textDecoration: 'none',
  },
}
