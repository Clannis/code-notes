import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { AppName } from '../appConfig'

// Create titlebar
let titleBar = document.createElement('div')

// Add titlebar to DOM
titleBar.className = 'titlebar'
document.body.appendChild(titleBar)

// Create App Title
let appTitle = document.createElement('h1')

// Add App Title to DOM
appTitle.className = 'titlebar__title'
appTitle.innerText = `${AppName}`
titleBar.appendChild(appTitle)

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
render(<App />, document.getElementById('root'))
