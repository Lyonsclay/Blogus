import React from 'react'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import BlogTitle from '../components/BlogTitle'

const styles = {
  p: {
    maxWidth: 600,
  },
  iframe: {
   width: '100%', 
    alignItems: 'center',
  },
}

const p1 = (
  <p style={styles.p}>
    This is an experimentation with animating SVG gradients in React.

    I originally conceived the idea during the Global Game Jam 2017. The theme
    was waves. I wanted to <em>make</em> a visual/audio interface that created an experience
    with wave like forms.
  </p>
)

const wormholes = (
  <iframe
    src="https://iris-slfpjxlrir.now.sh/"
    style={styles.iframe}
  />
)

export default () => (
  <Layout>
    <BlogTitle title="Worm Holes, an Animated Journey." />
    <Paragraph>
      {p1}
    </Paragraph>
    {wormholes}
  </Layout>
)
