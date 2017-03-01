import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div style={styles.sidebar}>
      <nav style={styles.menu}>
        <Link href='/'><a>Home</a></Link>
        <Link href='/shadowdom'><a>The Shallow Dom</a></Link>
        <Link href='/wormholes'><a>Worm Holes</a></Link>
        <Link href='/bloggy'><a>A Blog for Coders</a></Link>
      </nav>
    </div>
  </Layout>
)

const styles = {
  sidebar: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '12em',
  },
  menu: {
    fontFamily: 'Droid Serif',
    fontSize: 21,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid gray',
    backgroundColor: 'lightblue',
  },
}
