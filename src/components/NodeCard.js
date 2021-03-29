import React from 'react'
import { Card, CardContent, CardHeader, Typography, IconButton } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'

export default function NodeCard({ note, handleDelete }) {
    return (
        <Card>
            <CardHeader 
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