import React, { Component } from 'react'

export default class BlogTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder: 'My Blog Title',
      color: 'gray',
      edit: true,
      title: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.edit = this.edit.bind(this)
  }

  edit() {
    this.setState({
      placeholder: '',
      edit: true
    })
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      color: 'rgba(0, 80, 0, 0.8)',
    })
  }

  handleSubmit(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.setState({edit: false}, () => {
        event.nextSibling.focus()
      })
    }
  }

  render() {
    const { placeholder, color, title, edit } = this.state
    const value = placeholder + title
    return (
      <div>
        {
          edit?
          <form
            onKeyPress={this.handleSubmit}
          >
            <input
              type="text"
              value={value}
              style={{...styles.title, color: this.state.color}}
              onChange={this.handleChange}
              onClick={this.edit}
            />
          </form>

          :<div
             onClick={this.edit}
             style={styles.title}
           >
            {title}
          </div>
        }
      </div>
    )
  }
}

const styles = {
  title: {
    minWidth: 80,
    textAlign: 'center',
    fontSize: '20pt',
    fontFamily: 'helvetica',
    outline: 'none',
  }
}
