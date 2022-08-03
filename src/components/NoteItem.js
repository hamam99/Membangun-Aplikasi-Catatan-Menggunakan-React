import moment from 'moment'

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive
}) => {
  const handleDelete = () => {
    onDelete({ id })
  }

  const handleArchive = () => {
    console.log(`handleArchive`)
    onArchive({ id })
  }

  return (
    <div className="note-item ">
      <div className="note-item__content ">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">
          {moment(createdAt).format('dddd, DD MMMM YYYY')}
        </p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="note-item__archive-button" onClick={handleArchive}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  )
}

export default NoteItem
