import React, { Component } from 'react';
import marked, { highlighter } from 'marked';
import './App.css';
import placeholder from './placeholder';

marked.setOptions({
  breaks: true
});
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Markdown Previewer</h1>
        </header>
        <div id="editor-wrapper">
          <Toolbar title="Editor" />
          <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
        </div>
        <div id="previewer-wrapper">
          <Toolbar title="Preview" />
          <Previewer markdown={this.state.markdown}/>
        </div>
      </div>
    );
  }
}

const Editor = (props) => {
  return (
    <textarea id="editor"
      value={props.markdown}
      onChange={props.onChange}
      type="text"/>
    )
}
const Previewer = (props) => {
  return (
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} ></div>
    )
}

const Toolbar = (props) => {
  return (
    <div className="toolbar">{props.title}</div>
  )
}

export default App;
