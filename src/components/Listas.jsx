import React from 'react'
import {List,ListItem,ListItemIcon,ListItemText,Divider,ListItemLi} from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { NavLink } from 'react-router-dom';

export function Listas() {
    return (
        <div>
           <List component="nav">           
             <ListItem button component={NavLink} to="/dashboard/tareas">  
<ListItemIcon>
    <AssignmentIcon/>
</ListItemIcon>
<ListItemText>
    Tareas
</ListItemText>

             </ListItem>             
             <ListItem button component={NavLink} to="/dashboard/newtask">
<ListItemIcon>
    <PlaylistAddIcon/>
</ListItemIcon>
<ListItemText>
    Agreggar Tarea
</ListItemText>
             </ListItem>
             <ListItem button component="a" href="/Account">
<ListItemIcon>
    <AssignmentIndIcon/>
</ListItemIcon>
<ListItemText>
    Usuario
</ListItemText>
             </ListItem>
             <Divider></Divider>
               </List> 
        </div>
    )
}
