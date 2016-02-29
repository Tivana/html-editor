import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

export default class Output extends Component{




  render(){

      return (
        <div>
          <div dangerouslySetInnerHTML={{__html: this.props.output}} />
        </div>
      )
  }

}
