import { Container, Card, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles({
  card: {
    marginTop: 16,
    padding: 8
  }
})

export default function Notes() {
  const classes = useStyles()

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json()).then(data => setNotes(data))
  }, [])

  return (
    <Container>
      {notes.map(note => (
        <Card key={note.id} className={classes.card}>
          <p>{note.details}</p>
        </Card>
      ))}
    </Container>
  )
}
