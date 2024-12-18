'use client'
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

export default function Editor() {
  var Font = Quill.import('formats/font');
Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto', 'Mirza'];
Quill.register(Font, true);
  
  const { quill, quillRef } = useQuill({
    theme: 'snow', // Default theme
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],
        ['insertHorizontalLine'],                                      // remove formatting button
      ],
    },
  });


  return (
    <div style={{ width: 1000, height: 300 }}>
      <div ref={quillRef} />
    </div>
    
  );
}
