import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//Mount function to start up the app

const mount = (el) =>{
    ReactDOM.render(<App/>,el)
}


/* If we are in devlopment and in isolation
    call mount immediately
*/

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#marketing-root')
    if(devRoot){
        mount(devRoot)
    }
}

export {mount}