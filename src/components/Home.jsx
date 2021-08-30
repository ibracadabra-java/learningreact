import React from 'react'
export function Home({location}) {    
    return (                
            
            <div className="text-center">
                <h1>Welcome...!</h1>
                <h2 className="messagewlcome"> you are logged as {location.state.fullname}</h2>
            </div>
        
    )
}

