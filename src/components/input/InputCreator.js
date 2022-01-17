import React, { useState } from "react";
import AceEditor from "react-ace";//Library that creates an codePen interface

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

/**/

export default function InputCreator(props) {
  return (
    <div className="ace-editor">
      <AceEditor
        placeholder=""
        value={props.events}
        mode="javascript"
        theme="monokai"
        width="100%"
        height="100%"
        fontSize={20}
        onChange={e => props.setEvents(e)}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      
    </div>
  );
}
