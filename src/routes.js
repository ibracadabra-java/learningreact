import React from 'react'
import { Navigate,useRoutes } from 'react-router-dom';
import {RegisterContainer} from './components/RegisterContainer'
import {LoginContainer} from './components/LoginContainer'
import ContainerComponent from './components/ContainerComponent'
import { Task } from './components/Task';
import { NewTask } from './components/NewTask';

export function Router() {
    return useRoutes([
        {
          path: '/dashboard',
          element: <ContainerComponent />,
          children: [
            { path: '/', element: <Navigate to="/dashboard/tareas" replace /> },
            { path: 'tareas', element: <Task /> }, 
            { path: 'newtask', element: <NewTask /> },           
          ]
        },
        {
          path: '/login',
          element: <LoginContainer />         
        },
        {
            path: '/register',
            element: <RegisterContainer />         
          }
      ]);
    }
