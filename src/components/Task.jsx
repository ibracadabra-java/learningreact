import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'
import {DataGrid } from '@material-ui/data-grid'
const useStyle = makeStyles({

})
const columns = [      
    {
      field: 'name',
      headerName: 'Task Name',
      width: 150,
      editable: true,
    },
    {
      field: 'state',
      headerName: 'State',
      width: 150,
      editable: true,
    },
    {
      field: 'user',
      headerName: 'User Name',
      type: 'number',
      width: 150,
      editable: true,
    }
  ];
  
  const rows = [
    {id:1,name: 'Example Task 1', state: 'Done', user: 'Raul' },
    {id:2,name: 'Example Task 2', state: 'Pending', user: 'Raul' },
    {id:3,name: 'Example Task 3', state: 'Pending', user: 'Raul' },
    {id:4,name: 'Example Task 4', state: 'Pending', user: 'Raul' },
    {id:5,name: 'Example Task 5', state: 'Pending', user: 'Raul' },
    {id:6,name: 'Example Task 6', state: 'Pending', user: 'Raul' },
    {id:7,name: 'Example Task 7', state: 'Pending', user: 'Raul' },
    {id:8,name: 'Example Task 8', state: 'Pending', user: 'Raul' },
    {id:9,name: 'Example Task 9', state: 'Pending', user: 'Raul' },
  ];
  

export function Task() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}
