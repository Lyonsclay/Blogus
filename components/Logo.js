import React, { Component } from 'react'

export default class Logo extends Component {
  constructor() {
    super()

    this.state = {
      title: 'Reactimation',
      hoverStyle: {},
    }
  }

  hoverOn = () => {
    this.setState({
      hoverStyle: {
        color: 'rgba(10, 120, 180, 0.7)',
        textShadow: '1px 0px 2px rgba(10, 120, 180, 0.5)',
      }
    })
  }

  hoverOff = () => {
    this.setState({
      hoverStyle: {
        color: 'rgba(0, 0, 0, 0.8)',
        color: 'rgba(10, 120, 180, 0.7)',
      }
    })
  }

  render() {
    return (
      <div
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        <a
          href="/"
          style={styles.link}
        >
          <h2
            style={{...styles.title, ...this.state.hoverStyle}}
          >
            {this.state.title}
          </h2>
        </a>
      </div>
    )
  }
}

const styles = {
  link: {
    textDecoration: 'none',
  },
  title: {
    fontSize: 28,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.8)',
    color: 'rgba(8, 110, 160, 0.7)',
  }
}
