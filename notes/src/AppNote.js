  
import React, { useState } from 'react'
import Note from './components/Note'


const AppNote = (props) => {
  const [notes,setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll? notes: notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const newNoteObj = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(newNoteObj))
    setNewNote('')
  }

  const handleNoteChange = (event) =>{
    setNewNote(event.target.value)
  }


  return (
    <div className='note-container'>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' } notes
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
            <input 
              type='text' 
              value={newNote}
              onChange={handleNoteChange}
            />
            <button type='submit'>Save note</button>
        </form>
    </div>
  )
}

export default AppNote