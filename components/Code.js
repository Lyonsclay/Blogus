import React, { Component } from 'react'
import Head from 'next/head'


export default class Code extends Component {
  componentDidMount() {
    require('../src/microlight')
  }

  render() {
    return (
      <div className="microlight" style={styles}>
        {this.props.code}
      </div>
    )
  }
}

const styles = {
  whiteSpace: 'pre',
  fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  color: '#C4E4E8',
  backgroundColor: 'rgba(150, 10, 30, 0.7)',
}
