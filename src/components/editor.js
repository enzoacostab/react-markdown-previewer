import React from "react";
import { marked } from "marked";

class Editor extends React.Component{
    constructor(){
        super("props");
        this.state={
            text:"# Welcome to my React Markdown Previewer!\n## This is a sub-heading...### And here's some other cool stuff:\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n        return multiLineCode;\n    }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
        };
        marked.use({
            mangle: false,
            headerIds: false
          });
    };
    componentDidMount(){
        this.setState((state)=>{
            return document.getElementById('preview').innerHTML=marked.parse(state.text);
        })
    };

    handleChange=(e)=>{
        this.setState({text:e.target.value});
        this.setState((state)=>{
            return document.getElementById('preview').innerHTML=marked.parse(state.text);
        })
    };
    render(){
        return(
        <div id="c">
        <div className="e">
            <div className="toolbar"><h4 className="t">Editor</h4></div>
            <textarea onChange={this.handleChange} id="editor" value={this.state.text}></textarea>
        </div>
        <div className="p">
            <div className="toolbar"><h4 className="t">Preview</h4></div>
            <div id="preview"></div>
        </div>
        </div>);
    };
};

export default Editor;