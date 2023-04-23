
import React, { useEffect, useState } from "react";

import Editor, { useMonaco } from "@monaco-editor/react";
import * as monaco from 'monaco-editor'
const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  // monaco.languages.register({
  //   id: 'python'
  // });

  // monaco.languages.setLanguageConfiguration('python', {
  //   comments: {
  //     lineComment: '#',
  //   },
  // });
  
  // monaco.languages.setMonarchTokensProvider('python', {
  //   keywords: ['and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'False', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'None', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'True', 'try', 'while', 'with', 'yield'],
  //   tokenizer: {
  //     root: [
  //       [/[a-zA-Z_]\w*/, { token: 'identifier' }],
  //       [/(\d*\.)?\d+([eE][\-+]?\d+)?/, { token: 'number' }],
  //       [/"/, { token: 'string', next: '@string' }],
  //     ],
  //     string: [
  //       [/[^\\"]+/, { token: 'string' }],
  //       [/"/, { token: 'string', next: '@pop' }],
  //     ],
  //   },
  //   languageFeatures: monaco.languages.loadLanguageFeaturesFromXML('..\python-language-feature.xml'),
  // });

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        saveViewState={true}
      />
    </div>
  );
};
export default CodeEditorWindow;

// import React, { useRef, useState, useEffect } from "react";
// import * as monaco from "monaco-editor";

// function CodeEditorWindow({ code, onChange, language, theme }) {
//   const [value, setValue] = useState(code || '')

//   const editorRef = useRef(null);

//   const handleEditorChange = value => {
//     setValue(value);
//     onChange("code", value);

//   }


//   useEffect(() => {
//     editorRef.current = monaco.editor.create(document.getElementById("editor"), {
//       code,
//       language,
//       theme: "vs-dark",
//       onChange: { handleEditorChange }
//     });

//     editorRef.current.getModel().onDidChangeContent(() => {
//       onChange(editorRef.current.getValue());
//     });

//     return () => editorRef.current.dispose();
//   }, []);

//   return <div id="editor" style={{ height: "85vh", width: "100%" }}></div>;
// };


// export default CodeEditorWindow
