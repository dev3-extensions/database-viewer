import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Databases } from '@uloncl/db-manager'

var databases = new Databases()

databases.loadSchemas().then((r) => {
  console.log(r)
  console.log("databases:")
  console.log(JSON.stringify(databases.databases))
  console.log(databases.databases.length)
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
