import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import Output from './Output';

import 'brace/mode/html';
import 'brace/theme/monokai';


var initialSource =  '<html>\n<head>\n\n</head>\n\n <body>\n\n<h1>SAMPLE 1</h1>\n<h2>SAMPLE 2</h2>\n<h3>SAMPLE 3</h3>\n\n<p>Neque porro quisquam est qui dolorem ipsum quia dolor \n <br> sit amet, consectetur, adipisci velit.</p></body>\n\n</html>';

export default class Editor extends Component{


  constructor(props){
    var localS = localStorage.getItem("token");
    super(props);
    this.state = {
      value: typeof localS != "undefined" ? initialSource : localS
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
        <AceEditor mode="html" theme="monokai" fontSize={16} height="800"  width="670" value ={value } onChange={this.handleChange.bind(this)} name="editor" editorProps={{$blockScrolling: Infinity}} />
        <div id="output">
          <Output  output= {value} />
        </div>
      </div>

      );
  }

}
