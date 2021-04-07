import React, { useState , useRef, useEffect } from 'react';
import { ipcRenderer, remote } from 'electron';
import AceEditor from 'react-ace';

// Import a Modes (language)
import '../assets/brace/braceModes'

// Import a Themes (okadia, github, xcode etc)
import '../assets/brace/braceThemes'

export const MainWindow = () => {

  const [editorLanguage, setEditorLanguage] = useState("ruby");
  const [theme, setTheme] = useState('mono_industrial')
  const [fontSize, setfontSize] = useState(15);
  const [windowHeight, setWindowHeight] = useState(740);
  const [windowWidth, setWindowWidth] = useState(1160);
  const [tabSize, setTabSize] = useState(2)
  const editor = useRef()
  const body = document.body

  useEffect(() => {
    setWindowBackgroundColor()  
    setTitlebarTextColor()
    ipcRenderer.on('window:resize', (e, sizes) => {
      setWindowHeight(Math.floor((sizes[1] - 60)));
      setWindowWidth(Math.floor((sizes[0] - 40)));
    });
  }, [])

  function componentToHex(c) {
    const hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(color) {
    const [r, g, b] = color.split('(')[1].split(")")[0].split(', ')
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function setWindowBackgroundColor() {
    const target_obj = document.getElementsByClassName('ace_scroller')[0];
    const color = getComputedStyle(target_obj).backgroundColor;
    const hex = rgbToHex(color)
    body.style.backgroundColor = hex;
  }

  function setTitlebarTextColor() {
    const target_obj = document.getElementsByClassName('ace_gutter')[0];
    const title = document.getElementsByClassName('titlebar__title')[0]
    const color = getComputedStyle(target_obj).color;
    const hex = rgbToHex(color)
    title.style.color = hex;
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
  )
}
