import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { marked } from 'marked';
import { useState } from 'react';

function App() {
  
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;
  const [output, setOutput] = useState(placeholder)
  return (
    <div className="App">
      <div id="container">
      <div className="editor">
        <div className="header">
          <span>Editor</span>
        </div>
        <textarea 
        id="editor" 
        placeholder='Type Here' 
        defaultValue={placeholder} 
        onChange ={(event) => {setOutput(event.target.value)}}></textarea>
      </div>
      <div id="preview">
        <div className="header">
          <span>Preview</span>
        </div>
        <div id="preview-text" dangerouslySetInnerHTML={{__html: marked(output)}}>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
