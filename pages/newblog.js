import React from 'react'
import Document from '../components/Document'
import Title from '../components/BlogTitle'

const title = 'My New Blog'

export default () => (
  <div>
    <Title title={title} />
    <Document />
  </div>
)



