import React from 'react'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import BlogTitle from '../components/BlogTitle'

const styles = {
  p: {
    maxWidth: 600,
  },
  iframe: {
   width: '90%', 
    alignItems: 'center',
  },
}
const p1 = (
  <p style={styles.p}>
Why do users love motion so much? Mostly, because animation supports the essence of actual and real interaction, it creates the level of feelings and perception close to what people have when they are interacting with a physical object in real life. This sort of feeling can boost user experience rate of positiveness really high as the more natural user feels, the less effort is needed to deal with the app or a website and the more clear it is how it works. Certainly, it makes users satisfied. No secret, satisfaction and pleasure are among top things encouraging people to use the product again.
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
