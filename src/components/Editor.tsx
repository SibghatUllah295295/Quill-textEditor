'use client'
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
export default function Editor() {
  const [option, setOption] = useState("Font");
  const [selectedText, setSelectedText] = useState<string | undefined>("");
  const options = ["Font", "textual", "roboto", "aeonik"];
  document.addEventListener('selectionchange', () => {
    const selection = document.getSelection();
    setSelectedText(document.getSelection()?.toString());
  });
  const { quill, quillRef } = useQuill({
    theme: 'snow', // Default theme
    modules: {
      toolbar: [
        ['space'],
        ['space'],
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
        // remove formatting button
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
        ['clean'],
        ['insertHorizontalLine'],                                      // remove formatting button
      ],
    },
  });

  useEffect(() => {
    if (selectedText) {
      const selection = document.getSelection();
      const selectedText = selection?.toString();
      if (selectedText && selection?.rangeCount && !selection.isCollapsed) {
        setSelectedText(selectedText);
        console.log('updated selectedText: ', selectedText);

        // Create a range from the selection
        const range = selection.getRangeAt(0);

        // Create a span element with the desired class name
        const span = document.createElement('span');
        span.textContent = selectedText;
        span.className = `${option}`; // Add your desired class name here
        span.style.background = "transparent";
        // Replace the selected text with the span element
        range.deleteContents();
        range.insertNode(span);


        // Clear the selection
        selection.removeAllRanges();
      }
    }
    else if (selectedText == "") {
      const elements = document.querySelectorAll('.textual');
      elements.forEach((element) => {
        // Perform your desired operations on each element
        element.classList.remove('textual'); // Example: Remove an old class
        element.classList.add(`${option}`); // Example: Add a new class
      });
      const elements2 = document.querySelectorAll('.roboto');
      elements2.forEach((element) => {
        // Perform your desired operations on each element
        element.classList.remove('roboto'); // Example: Remove an old class
        element.classList.add(`${option}`); // Example: Add a new class
      });
      const elements3 = document.querySelectorAll('.aeonik');
      elements3.forEach((element) => {
        // Perform your desired operations on each element
        element.classList.remove('aeonik'); // Example: Remove an old class
        element.classList.add(`${option}`); // Example: Add a new class
      });

      const editor: Element = document.querySelector('.ql-editor') as Element;
      if (editor && option == "textual") {
        editor.classList.remove('roboto');
        editor.classList.remove('aeonik');
        editor.classList.add('textual');
        console.log('changed on option 1');
      }
      if (editor && option == "roboto") {
        editor.classList.remove('textual');
        editor.classList.remove('aeonik');
        editor.classList.add('roboto');
        console.log('changed on option 2');
      }
      if (editor && option == "aeonik") {
        editor.classList.remove('textual');
        editor.classList.remove('roboto');
        editor.classList.add('aeonik');
        console.log('changed on option 2');
      }
      if (editor && option == "Font") {
        editor.classList.remove('textual');
        editor.classList.remove('roboto');
        editor.classList.remove('aeonik');
      }
    }
  }, [option])

  return (
    <div style={{ width: 1000, height: 300 }}>
      <select onChange={(e) => setOption(e.target.value)} className="absolute z-20 top-[2vh]">
        {options.map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
          );
        })}
      </select>
      <div ref={quillRef} />
    </div>

  );
}