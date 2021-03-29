import React, { useState , useRef, useEffect } from 'react'
const { ipcRenderer } = require('electron')
import './assets/sass/main.scss'
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/javascript';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/monokai';


const App = () => {
  const [editorLanguage, setEditorLanguage] = useState("javascript");
  const [fontSize, setfontSize] = useState(15);
  const [maxLines, setMaxLines] = useState(30);
  let codeEditor = useRef(null)
  useEffect(() => {
    ipcRenderer.on('window:resize', (e, windowSize) => {
      console.log("windowHeight:", windowSize[1] - 66)
      // console.log('Max Lines: ', maxLines)
    })
  }, [])
  

  return (
    <>
      <div className="file-tree">
      </div>
      <div ref={codeEditor} className="code-editor">
        <AceEditor
          mode={editorLanguage}
          theme="monokai"
          fontSize={fontSize}
          setOptions={{
            maxLines: maxLines,
            minLines: 2,
            wrap: true,
            autoScrollEditorIntoView: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            vScrollBarAlwaysVisible: true
          }}
        />
      </div>
    </>
  );
}

export default App
