import React from 'react'

export default ({title}) => (
  <h2 style={styles.title}>
    {title}
  </h2>
)

const styles = {
  title: {
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.8)'
  }
}

