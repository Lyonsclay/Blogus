import React, { Component } from 'react'

export default class Logo extends Component {
  constructor() {
    super()

    this.state = {
      title: 'Reactimation',
      highlightStyle: {},
    }
  }

  highlightOn = () => {
    this.setState({
      highlight: {
        color: 'rgba(50, 30, 120, 0.5)',
      }
    })
    console.log('beneficient')
  }

  highlightOff = () => {
    this.setState({
      highlight: {
        color: 'rgba(0, 0, 0, 0.8)',
      }
    })
    console.log('malolevaloent')
  }

  render() {

    return (
      <span
        onMouseEnter={this.highlightOn}
        onMouseOut={this.hightlightOff}
      >
        <a
          href="/"
          style={styles.link}
        >
          <h2
            style={styles.title, this.state.highlight}
          >
            {this.state.title}
          </h2>
        </a>
      </span>
    )
  }
}

const styles = {
  link: {
    textDecoration: 'none',
  },
  title: {
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.8)',
    border: '2px dashed orange',
  }
}
