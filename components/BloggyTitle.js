import React, { Component } from 'react'
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw
} from 'draft-js'

export default class Title extends Component {
  constructor(props) {
    super(props)
    const contentState = {
      entityMap: {},
      blocks: [{
        key: '18ql9',
        text: 'My Newest Blog',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }],
    }
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(contentState))
    }
    /* this.state = { editorState: EditorState.createEmpty() }*/
    this.onChange = (editorState) => this.setState({editorState})
    this.handleSubmit = this.handleSubmit.bind(this)
    this.edit = this.edit.bind(this)
  }

  edit() {
    this.refs.title.focus()
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      color: 'rgba(0, 80, 0, 0.8)',
    })
  }

  handleSubmit(event) {
    /* event.preventDefault()*/
    console.log(JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())))
    /* this.refs.document.focus()*/
  }

  render() {
    return (
      <div
        onClick={this.edit}
        style={styles.title}
      >
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleReturn={this.handleSubmit}
          ref="title"
        />
      </div>
    )
  }
}

const styles = {
  title: {
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    fontSize: '20pt',
    fontFamily: 'helvetica',
    outline: 'none',
    color: 'gray',
  },
}
