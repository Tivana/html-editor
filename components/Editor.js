import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import Output from './Output';

import 'brace/mode/html';
import 'brace/theme/monokai';



export default class Editor extends Component{

  constructor(props){
    super(props);
    this.state = {
      value:localStorage.getItem("token")
    }

  }

handleChange(value){
this.setState({value});
localStorage.setItem("token", value );
}

  render(){
    const {value} = this.state;
      return (
        <div>
        <AceEditor mode="html" theme="monokai" fontSize={16} height="800"  width="670" value ={value != "" ? value : localStorage.getItem("token")} onChange={this.handleChange.bind(this)} name="editor" editorProps={{$blockScrolling: Infinity}} />
        <div id="output">
          <Output  output= {value != "" ? value : localStorage.getItem("token") } />
        </div>
      </div>

      );
  }

  


}
