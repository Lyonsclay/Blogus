import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Happy from './happy'

export default () => (
  <div style={styles.main}>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet"/>
    </Head>
    <div style={styles.menu}>
      <Link href="/happy" style={styles.link}>
        <a style={styles.link}>Shadow Dom</a>
      </Link>
      <Link href="/snappy" >
        <a style={styles.link}>Spliffy New</a>
      </Link>
    </div>
  </div>
)

const styles = {
  main: {
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
