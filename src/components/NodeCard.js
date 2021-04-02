import React from 'react'
import { Card, CardContent, CardHeader, Typography, IconButton, makeStyles, Avatar } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { yellow, blue, green, grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'Shopping') {
                return yellow[700]
            }
            if (note.category === 'Todos') {
                return blue[700]
            }
            if (note.category === 'Money') {
                return green[700]
            }
            return grey[700]
        }
    }
})

export default function NodeCard({ note, handleDelete }) {
    const classes = useStyles(note)

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        { note.category[0].toUpperCase() }
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={ note.title }
                subheader={ note.category }
            />
            <CardContent>
                <Typography variant="body2">
                    { note.details }
                </Typography>
            </CardContent>
        </Card>
    )
}
