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
  color: '#052C36',
  color: '#C4E4E8',
  backgroundColor: '#C4E4E8',
  backgroundColor: '#052C36',
  backgroundColor: 'rgba(5, 43, 54, 0.8)',
  width: '75%',
  overflow: 'scroll',
  /* boxShadow: '1px 2px 3px 1px rgba(5, 43, 54, 0.4)',*/
  borderRadius: 10,
}
