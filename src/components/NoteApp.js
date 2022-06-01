import autoBind from 'auto-bind'
import React, { Component } from 'react'
import { getInitialData } from '../utils'
import NoteInput from './NoteInput'
import NoteList from './NoteList'
import NoteNavbar from './NoteNavbar'

export default class NoteApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
      search: '',
    }

    autoBind(this)
  }

  onSearchNoteEventHandler(event) {
    this.setState({
      search: event.target.value,
    })
  }

  onAddNoteHandler({ title, body }) {
    const timestamp = +new Date()

    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: timestamp,
          title,
          body,
          createdAt: timestamp,
          archived: false,
        },
      ],
    }))
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id)

    this.setState({ notes })
  }

  onArchivedNoteHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    )

    this.setState({ notes })
  }

  render() {
    return (
      <>
        <NoteNavbar searchNote={this.onSearchNoteEventHandler} />
        <div className='note-app__body'>
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            title='Catatan Aktif'
            notes={this.state.notes}
            search={this.state.search}
            onDelete={this.onDeleteNoteHandler}
            onArchived={this.onArchivedNoteHandler}
          />
          <NoteList
            title='Arsip'
            notes={this.state.notes}
            archived
            search={this.state.search}
            onDelete={this.onDeleteNoteHandler}
            onArchived={this.onArchivedNoteHandler}
          />
        </div>
      </>
    )
  }
}
