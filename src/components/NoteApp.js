import React, { useState } from 'react'
import moment from 'moment'
import NoteInput from './NoteInput'
import NotesList from './NotesList'
const NoteApp = () => {
  const [notes, setNotes] = useState([])

  const addNotes = ({ title, body }) => {
    setNotes((prevState) => [
      ...prevState,
      {
        title,
        body,
        id: +new Date(),
        archived: false,
        createdAt: moment().toISOString()
      }
    ])
  }

  const onDelete = ({ id }) => {
    const newNotes = notes.filter((notes) => notes.id !== id)
    setNotes(newNotes)
  }

  const onArchive = ({ id }) => {
    const selectedNotes = notes.find((notes) => notes.id === id)
    console.log(`selectedNotes before`, selectedNotes)
    if (selectedNotes.archived) {
      selectedNotes.archived = false
    } else {
      selectedNotes.archived = true
    }

    const newNotes = notes.filter((notes) => notes.id !== id)
    setNotes([selectedNotes, ...newNotes])
  }

  const getArchivedNotes = () => {
    return notes.filter((note) => note.archived)
  }

  const getActiveNotes = () => {
    return notes.filter((note) => !note.archived)
  }
  return (
    <>
      <div className="note-app__header">
        <h1>Notes</h1>
      </div>
      <NoteInput addNotes={addNotes} />
      <div className="note-app__body ">
        <h2>Catatan Aktif</h2>
        <NotesList
          notes={getActiveNotes()}
          onDelete={onDelete}
          onArchive={onArchive}
        />
        <h2>Arsip</h2>
        <NotesList
          notes={getArchivedNotes()}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </div>
    </>
  )
}

export default NoteApp
