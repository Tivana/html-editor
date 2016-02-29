import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

export default class Output extends Component{


handleClickDefault(){
   localStorage.setItem("token",'<html>\n<head>\n\n</head>\n\n <body>\n\n<h1>SAMPLE 1</h1>\n<h2>SAMPLE 2</h2>\n<h3>SAMPLE 3</h3>\n\n<p>Neque porro quisquam est qui dolorem ipsum quia dolor \n <br> sit amet, consectetur, adipisci velit.</p></body>\n\n</html>');
   location.reload();
}

  render(){

      return (
        <div>
          <button onClick={this.handleClickDefault} className="btn btn-success pull-right">getDefault</button>
          <div dangerouslySetInnerHTML={{__html: this.props.output}} />
        </div>
      )
  }

}
