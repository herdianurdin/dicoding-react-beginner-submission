import NoteItem from './NoteItem'

const NoteList = ({
  title,
  notes,
  search,
  archived = false,
  onArchived,
  onDelete,
}) => {
  notes = notes.filter(
    (note) =>
      note.archived === archived &&
      note.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h2>{title}</h2>
      {notes.length !== 0 ? (
        <div className='notes-list'>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchived={onArchived}
            />
          ))}
        </div>
      ) : (
        <div className='notes-list__empty-message'>Tidak ada catatan</div>
      )}
    </>
  )
}

export default NoteList
