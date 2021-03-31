import { Drawer, Typography, List, ListItem, makeStyles, ListItemText, ListItemIcon } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles({
    pages: {
        background: '#f9f9f9',
        width: '100%',
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    root: {
        display: 'flex',
    },
    active: {
        background: '#f4f4f4',
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation();

    const menuItem = [
        {
            text: 'My notes',
            icon: <SubjectOutlined color="secondary"/>,
            path: '/',
        },
        {
            text: 'Create',
            icon: <AddCircleOutlineOutlined color="secondary"/>,
            path: '/create',
        },
    ]
    
    return (
        <div className={classes.root}>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5">Ninja notes</Typography>
                </div>

                <List>
                    {menuItem.map(item => (
                        <ListItem 
                        key={ item.text } 
                        className={location.pathname == item.path ? classes.active : null}
                        onClick={() => history.push(item.path)}
                        button >
                            <ListItemIcon>{ item.icon }</ListItemIcon>
                            <ListItemText primary={ item.text } />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <div className={classes.pages}>
                { children }
            </div>
        </div>
    )
}
