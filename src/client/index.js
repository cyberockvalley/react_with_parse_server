import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ComponentsRoutes from './ComponentsRoutes'

const initialData = window.__initialData__
delete window.__initialData__

const App = () => (
  <Router>
    <ComponentsRoutes initialData={initialData} />
  </Router>
)

ReactDOM.hydrate(<App suppressHydrationWarning={true} />, document.getElementById('root'))