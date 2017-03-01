import React from 'react'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import BlogTitle from '../components/BlogTitle'

const styles = {
  p: {

  },
  iframe: {
    width: '90%',
    alignItems: 'center',
  },
}
const p1 = (
  <p style={styles.p}>
    Movement is achieved by stating every position an object is moved to. This means that the program is responsible in some fashion for providing a list of positions and delivering them at a certain rate to achieve velocity or movement along a path. To get the speed I wanted I needed to add 20px every computational cycle which is dictated by the requestAnimationFrame() method, which isn’t all that smooth.
  </p>
)
const p9 = (
  <p style={styles.p}>
    This is an experimentation with animating SVG gradients in React.
    I originally conceived the idea during the Global Game Jam 2017. The theme
    was waves. I wanted to <em>make</em> a visual/audio interface that created an experience
    with wave like forms.
  </p>
)
const p2 = (
  <p style={styles.p}>
    I chose to use React and was suprised to disover that I was able to implement SMIL animations.
    And contrary to the deprecation warnings I could implement it on different browsers; doubtfull
    that it would work on IE any version, because it was Microsoft that killed the technology by
    saying IE would never implement SMIL. Oh well.
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
    <Paragraph>
      {p2}
    </Paragraph>
    <Paragraph>
      {p9}
    </Paragraph>
    {wormholes}
  </Layout>
)
