import React, { Component } from 'react'
import EditParagraph from './EditParagraph'

export default class Document extends Component {
  constructor(props) {
    super(props)

    this.state = {
      paragraphs: [],
      index: -1,
    },

    this.newParagraph = () => {
      const { paragraphs, index } = this.state


      this.setState({
        paragraphs: [
          ...paragraphs.slice(0, index),
          <EditParagraph />,
          ...paragraphs.slice(index)
        ],
        index: ++index
      })
    }
  }

  render() {
    return (
      <div style={styles.main}>
        {this.state.paragraphs}
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
  },
}
