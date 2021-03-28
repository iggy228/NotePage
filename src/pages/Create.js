import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography, Button, Container, TextField, Radio, makeStyles, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'

const useStyles = makeStyles({
  btn: {
    borderRadius: 16,
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 16,
  },
  field: {
    marginTop: 16,
  },
})

export default function Create() {
  const classes = useStyles()

  const history = useHistory()

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [category, setCategory] = useState('money')

  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (title && details) {
      fetch('http://localhost:8000/notes', { 
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
    setTitleError(title === '')
    setDetailsError(details === '')
  }

  return (
    <Container>
      <Typography 
        className={classes.title} 
        color="textSecondary" 
        variant="h2" 
        align='center'
        gutterBottom >
        Create your note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          variant='outlined' 
          label='Title' 
          color='secondary'
          required
          fullWidth />
        <TextField 
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
          variant='outlined' 
          label='Write a note'
          color='secondary' 
          fullWidth 
          multiline
          required
          rows={3} />

        <FormControl className={classes.field} component='fieldset'>
          <FormLabel component='legend'>Note category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel control={<Radio />} label='Money' value='money' />
            <FormControlLabel control={<Radio />} label='Shopping' value='shopping' />
            <FormControlLabel control={<Radio />} label='Todos' value='todos' />
            <FormControlLabel control={<Radio />} label='Others' value='others' />
          </RadioGroup>
        </FormControl>
        
        <Button
          className={[classes.btn, classes.field]}
          startIcon={<PublishIcon />}
          type='submit'
          size='large'
          variant="contained" 
          color="primary"
          disableElevation 
          fullWidth >
          Submit
        </Button>
      </form>

      
    </Container>
  )
}