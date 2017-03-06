import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

export default class Layout extends Component {
  componentWillMount() {
    try{Typekit.load({ async: true })}catch(e){}
  }

  render() {
    return (
      <div style={styles.body}>
        <Head>
          <title>Reactimation</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <script src="https://use.typekit.net/wwg1wtb.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Lustria" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Merriweather:300" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Peddana" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet"/>
        </Head>

        <div style={styles.main}>
          <header style={styles.header}>
            <Logo />
            <Link href='/newblog'><a>New Blog</a></Link>
          </header>
          <div style={styles.content}>

            { this.props.children }

          </div>
          <Footer text="Clay Morton clay.morton@gmail.com @Lyonsclay github/Lyonsclay" />
        </div>
      </div>
    )
  }
}

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
    /* minWidth: '50%',*/
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
    width: 800,
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
