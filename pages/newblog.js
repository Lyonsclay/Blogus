import React from 'react'
import Layout from '../components/Layout'
import Document from '../components/Document'
import Title from '../components/BlogTitle'

const title = 'My New Blog'

export default () => (
  <div>
    <Layout>
      <Title title={title} />
      <Document />
    </Layout>
  </div>
)
