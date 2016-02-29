import React, {Component} from 'react';
import {render} from 'react-dom';
import AceEditor from './Editor';
import Output from './Output';

export default class App extends Component {


  render() {
    return (
      <div>
      <AceEditor />
  </div>


    )
  }
}

render(<App />, document.getElementById('container'));
