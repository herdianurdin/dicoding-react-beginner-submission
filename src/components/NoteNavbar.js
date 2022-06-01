const NoteNavbar = ({ searchNote }) => {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <div className='note-search'>
        <input
          onChange={searchNote}
          type='search'
          placeholder='Cari catatan ...'
        />
      </div>
    </div>
  )
}

export default NoteNavbar
