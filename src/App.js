import React, { useState , useRef, useEffect } from 'react';
const { ipcRenderer, remote } = require('electron');
import './assets/sass/main.scss';
import AceEditor from 'react-ace';

// Import a Modes (language)
import './assets/brace/braceModes'

// Import a Themes (okadia, github, xcode etc)
import './assets/brace/braceThemes'
import ace from 'react-ace';


const App = () => {
  const [editorLanguage, setEditorLanguage] = useState("ruby");
  const [theme, setTheme] = useState('solarized_dark')
  const [fontSize, setfontSize] = useState(15);
  const [windowHeight, setWindowHeight] = useState(740);
  const [windowWidth, setWindowWidth] = useState(1160);
  const [tabSize, setTabSize] = useState(2)
  const editor = useRef()

  useEffect(() => {
    // console.log(ace)
    // ace.config.set("themePath", "brace/theme");
    setWindowColor()  
    ipcRenderer.on('window:resize', (e, sizes) => {
      setWindowHeight(Math.floor((sizes[1] - 60)));
      setWindowWidth(Math.floor((sizes[0] - 40)));
    });
  }, [])

  function componentToHex(c) {
    var hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(color) {
    let [r, g, b] = color.split('(')[1].split(")")[0].split(', ')
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function setWindowColor() {
    // const backgroundColor = document.querySelector(`.ace-${theme}`)
    // [...editor.current.editor.renderer.theme.cssText.matchAll(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g)]
    const mainWindow = remote.getCurrentWindow()
    // mainWindow.setBackgroundColor(backgroundColor)
    // mainWindow.blur()
    // mainWindow.focus()
    // console.log(editor.current.editor.renderer.theme.cssText.split('.'))
    console.log(editor.current.editor.renderer.container)
    var target_obj = document.getElementsByClassName('ace_scroller')[0];
    var color = getComputedStyle(target_obj).backgroundColor;
    
    console.log(color)
    var hex = rgbToHex(color)
    console.log(hex)
    ipcRenderer.send('window:new-color', hex)
    // mainWindow.setBackgroundColor(`${hex}`)
    // mainWindow.blur()
    // mainWindow.focus()

  }

  return (
    <>
      <div className="file-tree">
      </div>
      <div className="ace">
        <AceEditor
          ref={editor}
          mode={editorLanguage}
          theme={theme}
          fontSize={fontSize}
          height={`${windowHeight}px`}
          width={`${windowWidth}px`}
          tabSize={tabSize}
          setOptions={{
            wrap: true,
            focus: true,
            autoScrollEditorIntoView: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showPrintMargin: false,
            vScrollBarAlwaysVisible: true
          }}
        />
      </div>
    </>
  );
}

export default App
