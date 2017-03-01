import React from 'react'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import BlogTitle from '../components/BlogTitle'
import Code from '../components/Code'
import codeSnippet from './codeSnippet'

const styles = {
  iframe: {
    width: '90%',
    alignItems: 'center',
  },
}
const p1 = (
  <p style={styles.p}>
  </p>
)
const p2 = (
  <p style={styles.p}>
    This has inspired me to create a blogging engine for coders that handles code and embedded animations or demos in a much cleaner way.
      </p>
)
const p3 = (
  <p style={styles.p}>
    The first challenge was to find a typeface that matched the clarity and quality of Medium.
    I literally have spent two or three days searching for such a typeface which has been an eye
    opening experience
  </p>
)

export default () => (
  <Layout>
    <BlogTitle title="Building a Coders Blog" />
    <Paragraph>
      I love Medium as a blogging engine. I'ts minimalist style is exquisite and effective.
      Additionaly you get great discoverablility and SEO. However when writing a coding blog
      there are several limitations that I quickly ran into. The baked in embedded coding is
      dull and including a Codepen looks clunky.
    </Paragraph>
    <Paragraph>
      {p2}
    </Paragraph>
    <Code>
      {codeSnippet}
    </Code>
    <Paragraph>
      {p3}
    </Paragraph>

  </Layout>
)
