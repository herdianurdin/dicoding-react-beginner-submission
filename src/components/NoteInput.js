import autoBind from 'auto-bind'
import React, { Component } from 'react'

export default class NoteInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
    }

    autoBind(this)
  }

  onTitleChangeEventHandler(event) {
    const charLength = event.target.value.length

    if (charLength <= 50) {
      this.setState({ title: event.target.value })
    }

    return false
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()

    this.setState({ title: '', body: '' })
    this.props.addNote(this.state)
  }

  render() {
    return (
      <div className='note-input'>
        <h2 className='note-input__title'>Buat Catatan</h2>
        <div className='note-input__title__char-limit'>
          Sisa Karakter: {50 - this.state.title.length}
        </div>
        <form className='note-input__body' onSubmit={this.onSubmitEventHandler}>
          <input
            type='text'
            placeholder='Ini adalah judul ...'
            onChange={this.onTitleChangeEventHandler}
            value={this.state.title}
          />
          <textarea
            placeholder='Tuliskan catatanmu di sini ...'
            rows={10}
            onChange={this.onBodyChangeEventHandler}
            value={this.state.body}
          />
          <button>Buat</button>
        </form>
      </div>
    )
  }
}
