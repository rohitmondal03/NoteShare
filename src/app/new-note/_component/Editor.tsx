"use client"

import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
// import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
// import "froala-editor/js/plugins/image.min.js"
import "froala-editor/js/plugins/char_counter.min.js"
import "froala-editor/js/plugins/save.min.js"
import "froala-editor/js/plugins/markdown.min.js"
import "froala-editor/js/plugins/code_view.min.js"
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/plugins/code_view.min.css';


export default function Editor() {
  const [model, setModel] = useState(() => {
    return localStorage.getItem("editor_savedHTML") || ""
  })

  return (
    <div className="w-[40vw] mx-auto">
      <FroalaEditor
        model={model}
        tag="textarea"
        config={{
          // charCounterMax: 20,
          placeholderText: 'Start taking a note....',
          charCounterCount: true,
          saveInterval: 500,
          events: {
            "charCounter.exceeded": function () {
              alert("You have exceeded the latest limit....")
            },
            "save.before": function (html: string) {
              localStorage.setItem("editor_savedHTML", html)
              console.log(model)
            }
          }
        }}
      />

      {/* <FroalaEditorView model={model} /> */}
    </div>
  )
}