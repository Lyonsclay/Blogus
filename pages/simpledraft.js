import React from 'react';
import {Editor, EditorState} from 'draft-js';

export default class PlainTextEditorExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      editor: false,
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.logState = () => console.log(this.state.editorState.toJS());
  }

  componentDidMount() {
    this.setState({ editor: true })
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          {this.state.editor 
           ? <Editor
               editorState={this.state.editorState}
               onChange={this.onChange}
               placeholder="Enter some text..."
               ref="editor"
             />
           : null
          }
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}

const styles = {
  root: {
    fontfamily: '\'helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minheight: 80,
    padding: 10,
  },
  button: {
    margintop: 10,
    textalign: 'center',
  },
}
