import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { AppName } from '../appConfig'

let titleBar = document.createElement('div')

titleBar.className = 'titlebar'
document.body.appendChild(titleBar)

let appTitle = document.createElement('h1')
appTitle.className = 'titlebar__title'
appTitle.innerText = `${AppName}`
titleBar.appendChild(appTitle)

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
render(<App />, document.getElementById('root'))
