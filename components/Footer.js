import React from 'react'

export default ({text}) => (
  <footer style={styles.footer}>
    <p>{text}</p>
  </footer>
)

const styles = {
  footer: {
    color: 'rgba(8, 110, 160, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    border: '2px dashed cyan',
  }
}
