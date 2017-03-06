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

      /* this.refs['paragraph' + index].focus()*/


      console.log('Happiness')
    }

  render() {
    return (
      <div style={styles.main} onClick={this.newParagraph}>
        
        {this.state.paragraphs}
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    backgroundColor: 'yellow',
    width: 200,
    height: 200,
  },
}
