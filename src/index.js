import React from 'react'
import ReactDOM from 'react-dom'

const app_target = document.getElementById('app')
const App = (props) => (
    <div> This app builded with "Only React Boilerplate" </div>
)

ReactDOM.render(<App />, app_target)