# Quill-textEditor
This Project is the complete and free source code for
the Quill rich text editor implementation in React/Next.js.
There are different bugs in the quill editor, which are clearly solved
in this project.

Main Problems solved in this project are as follows:
1 -> When user paste any text from any site, its backgrounColor is also pasted:
Solution: The latest version of quill has this problem, I installed old versions of Quill,
"dependencies": {
    "next": "15.1.0",
    "prop-types": "^15.8.1",
    "quill": "^1.3.7",
    "quill-better-table": "^1.2.10",
    "quill-table-module": "^1.0.1",
    "quilljs": "^0.18.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-quill": "^2.0.0",
    "react-quill-new": "^3.3.3",
    "react-quilljs": "^1.2.17",
    "react-scripts": "^4.0.0"
  },
2 -> How to Add Custom Fonts in Quill in next.js?
Solution: It is mostly asked question on different plateforms
like StackOverflow, etc. but noOne gives its answer in context of next.js.
I solved this question in this project.
3 -> After the solution of Question 2, we get another problem, If user highlights any
specific text to change the font, Whole font of the editor is changed instead of the specific
highlighted text. I Solved this problem, In this project user is able to change the font of any
specific text or change the font of the whole editor.
