import React from 'react'
import Layout from '../components/Layout'
import Document from '../components/Document'
/* import Title from '../components/BlogTitle'*/
import Title from '../components/BloggyTitle'

const title = 'My New Blog'

export default () => (
  <div>
    <Layout>
      <div style={styles.title}>
        <Title style={styles.title} />
      </div>
      <div style={styles.document}>
        <Document />
      </div>
    </Layout>
  </div>
)

const styles = {
  title: {
    marginTop: 40,
  },
  document: {
    marginTop: 40,
  }
}
