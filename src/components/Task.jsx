import React, { Fragment,useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import {DataGrid } from '@material-ui/data-grid'
import { useState } from 'react';
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
  
  
  

export function Task() {
  const [tasks,setTasks] = useState([])
  useEffect(() => {
    console.log("useEffect")
    getTask()
  },[])
  const getTask = async() =>{
    const data =await fetch('https://localhost:44384/api/Task/Get')
    const task = await data.json()
    setTasks(task)
    console.log(task)
  }
  const rows = tasks.map(item=>(
      {id:item.id,name: item.name, state: item.state, user: item.user.fullName }
    ))
  
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
