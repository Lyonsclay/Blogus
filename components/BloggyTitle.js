import React, { Component } from 'react'
import createSingleLinePlugin from 'draft-js-single-line-plugin'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import { EditorState } from 'draft-js'

const singleLinePlugin = createSingleLinePlugin()
const plugins = [createSingleLinePlugin]

export default class Title extends Component {
  constructor(props) {
    super(props)

    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => this.setState({editorState})
    this.focus = () => this.refs.title.focus()
    this.handleSubmit = () => this.handleSubmit().bind(this)
  }


  handleChange(event) {
    this.setState({
      title: event.target.value,
      color: 'rgba(0, 80, 0, 0.8)',
    })
  }

  handleSubmit(event) {
        event.nextSibling.focus()
  }

  render() {
    return (
      <div onClick={this.focus}>
        <Editor
          plugins={plugins}
          blockRenderMap={singleLinePlugin.blockRenderMap}
          style={styles.title}
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleReturn={this.handleSubmit}
          placeholder="My Newest Blog"
          ref={'title'}
        />
      </div>)}
}

const styles = {
  title: {
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    fontSize: '20pt',
    fontFamily: 'helvetica',
    outline: 'none',
  },
}
