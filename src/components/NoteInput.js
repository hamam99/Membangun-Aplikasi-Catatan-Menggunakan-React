import React, { useState } from 'react'
const NoteInput = ({ addNotes }) => {
  const DEFAULT_CHAR_LIMIT = 50

  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeNotes = (event) => {
    setNotes(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (title.length <= 0) {
      return
    }

    if (notes.length <= 0) {
      return
    }

    // console.log(title, notes)
    addNotes({
      title,
      body: notes
    })

    setTitle('')
    setNotes('')
  }

  return (
    <div className="note-input">
      <p className="note-input__title">Buat Catatan</p>
      <p className="note-input__title__char-limit">
        Sisa karakter:{DEFAULT_CHAR_LIMIT - title.length}
      </p>
      <form onSubmit={onSubmit}>
        <input
          value={title}
          maxLength={DEFAULT_CHAR_LIMIT}
          type={'text'}
          placeholder={'Ini adalah judul'}
          onChange={onChangeTitle}
        />
        <textarea
          value={notes}
          rows={10}
          type={'text'}
          placeholder={'Tuliskan catatanmu di sini'}
          onChange={onChangeNotes}
        />
        <button type={'submit'}>Buat</button>
      </form>
    </div>
  )
}

export default NoteInput
