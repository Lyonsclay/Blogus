import React, { Component } from 'react'
import {Editor, EditorState } from 'draft-js'

export default class EditParagraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
      editor: false,
    }

    this.onChange = (editorState) => this.setState({editorState})
  }

  componentDidMount() {
    this.refs[this.props.paragraph].focus()
  }


  render() {
    return (
      <div
        style={styles.main}
      >
        <Editor
          style={styles.editor}
          editorState={this.state.editorState}
          onChange={this.onChange}
          ref={this.props.paragraph}
        />
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexBasis: 'auto',
    border: '2px solid gray',
    marginTop: '1em',
  },
  editor: {
    flex: '1 1 1em',
  }
}

