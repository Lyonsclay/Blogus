import React, { Component } from 'react'
import {Editor, EditorState } from 'draft-js'
import Head from 'next/head'


export default class Document extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty(),
    }
    this.onChange = (editorState) => this.setState({editorState})
    this.blockStyle = () => 'block'
  }

  componentDidMount() {
    this.refs.document.focus()
  }

  render() {
    return (
      <div
        style={styles.main}
      >
        <Editor
          editorState={this.state.editorState}
          blockStyleFn={this.blockStyle}
          onChange={this.onChange}
          ref="document"
        />
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '42vw',
    backgroundColor: 'gray',
    backgroundColor: 'white',
    fontFamily: 'Quattrocento',
    fontFamily: 'Droid Serif',
    fontFamily: 'Merriweather',
    fontFamily: 'Lustria',
    /* fontFamily: 'Peddana',*/
    lineHeight: '1.7em',
    letterSpacing: '-.003em',
    fontWeight: 200,
    color: 'rgba(10, 10, 10, .8)',
    fontSize: '14pt',
    wordSpacing: '.1em',
    /* cursor: 'text',*/
  },
}

//Freight Text Pro Book is a great font from myfonts.com for $45.
