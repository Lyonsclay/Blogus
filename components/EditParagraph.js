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

  componentWillUpdate() {
    console.log(this.state.editorState.toJS())
    console.log(this.state.editorState.getBlockTree())
  }

  render() {
    return (
      <div
        style={styles.main}
        onClick={this.focus}
        onKeyUp={this.props.keyUp}
      >
        <Editor
          style={styles.editor}
          editorState={this.state.editorState}
          onChange={this.onChange}
          ref={this.props.paragraph}
          placeholder="Chances are you..."
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
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    fontFamily: 'inherit',
    fontWeight: 200,
    color: 'rgba(10, 10, 10, .7)',
    fontSize: 18,
    cursor: 'text',
  },
  editor: {
    flex: '1 1 1em',
  }
}

