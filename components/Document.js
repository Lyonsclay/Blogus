import React, { Component } from 'react'
import EditParagraph from './EditParagraph'

export default class Document extends Component {
  constructor(props) {
    super(props)

    this.state = {
      paragraphs: [],
      index: -1,
    }
  }

  _keyPress = (e) => {
    if (e.key === 'Enter') {
      this.newParagraph()
    }
  }

  newParagraph = () => {
    const { paragraphs, index } = this.state

    this.setState({
      paragraphs: [
        ...paragraphs.slice(0, index),
        <EditParagraph key={index} paragraph={'paragraph' + (index + 1)}/>,
        ...paragraphs.slice(index)
      ],
      index: index + 1
    })
  }

  render() {
    return (
      <div
        style={styles.main}
        onClick={this.newParagraph}
        onKeyDown={this._keyPress}
      >

        {this.state.paragraphs}
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '32vw',
    backgroundColor: 'gray',
    backgroundColor: 'white',
  },
}
