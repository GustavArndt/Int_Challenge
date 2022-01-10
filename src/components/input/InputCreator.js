import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

import InputCreator from "./InputCreator";

export default function InputCre() {
  function onChange(newValue) {
    console.log("change", newValue);
  }

  return (
    <div className="ace-editor">
        <AceEditor
  placeholder=""
  mode="javascript"
  theme="monokai"
  name="blah2"
  width="100%"
  height="100%"
  fontSize={30}
  showPrintMargin={false}
  showGutter={true}
  highlightActiveLine={true}
  value=""
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
          
    </div>
  );
}
