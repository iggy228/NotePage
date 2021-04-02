import { Drawer, Typography, List, ListItem, makeStyles, ListItemText, ListItemIcon, AppBar, Toolbar, Avatar } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { format } from 'date-fns'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    
    return {
        pages: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
            background: '#dddddd',
        },
        appbar: {
            width: 'calc(100% - ' + drawerWidth + 'px)',
        },
        toolbar: theme.mixins.toolbar,
        root: {
            display: 'flex',
        },
        active: {
            background: '#f4f4f4',
        },
        title: {
            padding: theme.spacing(),
        },
        date: {
            flexGrow: 1,
        },
        avatar: {
            marginLeft: theme.spacing(2),
        }
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

            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is: { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Iggy
                    </Typography>
                    <Avatar className={classes.avatar} src="/thug_macka.jpg" />
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography className={classes.title} variant="h5">Ninja notes</Typography>
                </div>

                <List>
                    {menuItem.map(item => (
                        <ListItem 
                        key={ item.text } 
                        className={location.pathname === item.path ? classes.active : null}
                        onClick={() => history.push(item.path)}
                        button >
                            <ListItemIcon>{ item.icon }</ListItemIcon>
                            <ListItemText primary={ item.text } />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <div className={classes.pages}>
                <div className={classes.toolbar}></div>
                { children }
            </div>
        </div>
    )
}
