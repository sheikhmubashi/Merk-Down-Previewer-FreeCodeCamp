import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  marked.setOptions({
    breaks: true
  })
  const [text, setText] = useState(`
  # This is H1
  ## This is H2
  [This is a Title](https://www.example.com)
  \`This one is a code block\`
  \`\`\`
  {
    "firstName": "Mubashir",
    "lastName": "Ejaz",
    "age": 24k
  }
  \`\`\`
  - I'm a good learner
- I'm a self taught developer
- I love javaScript

> Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. 

![My image]({image})

**bold text**
  `)
  return (
    <div className="App">
      <textarea id='editor' onChange={(e) => { setText(e.target.value) }} value={text}></textarea>
      <div
        id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}>
      </div>
    </div>
  );
}

export default App;
