import React from 'react'
import { showFormattedDate } from '../utils'

const NoteItem = ({ note, onDelete, onArchived }) => {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{note.title}</h3>
        <div className='note-item__date'>
          {showFormattedDate(note.createdAt)}
        </div>
        <p>{note.body}</p>
      </div>
      <div className='note-item__action'>
        <div
          onClick={() => onDelete(note.id)}
          className='note-item__delete-button'
        >
          Delete
        </div>
        <div
          onClick={() => onArchived(note.id)}
          className='note-item__archive-button'
        >
          {note.archived ? 'Pindahkan' : 'Arsipkan'}
        </div>
      </div>
    </div>
  )
}

export default NoteItem
