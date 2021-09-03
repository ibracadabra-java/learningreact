import React, { Fragment } from 'react'
import { Navbar } from './Navbar'
import {Listas} from './Listas'
import HiddenCompo from './HiddenCompo'
export function Home({form}) {    
    return (                
            <Fragment>
                <Navbar/>
                <Listas/>
                <HiddenCompo/>
            <div className="text-center">
                <h1>Welcome...!</h1>
                <h2 className="messagewlcome"> you are logged as {form}</h2>
            </div>
            </Fragment>
        
    )
}

