import NoteItem from './NoteItem'

const NotesList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="notes-list">
      {notes.length <= 0 && (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      {notes.map((note) => (
        <NoteItem {...note} onDelete={onDelete} onArchive={onArchive} />
      ))}
    </div>
  )
}

export default NotesList
