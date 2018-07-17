const placeholder = 
`# Welcome to my React Markdown Previewer!

## This placeholder shows capabilities of the Previewer
### Take a look at all the options available:
  
Here is some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
// Unfortunately, it doesn't support syntax highlighting.

function awesomeExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**,
_italic_,
or **_both_** if desired.

It is recommended to be consistent when defining **bold** and _italic_ and to not mix used characters.

~~crossing out~~ also works.

You can also implement [links](https://www.freecodecamp.com), and
> Block Quotes!

Tables are also being supported:

Nice Header | Good Header | Awesome Header!
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default placeholder;