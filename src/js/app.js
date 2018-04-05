import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/layout.scss';
var create = require('create-react-class');

var App = create({
  render: function() {
    return(
      <h1>Hello World</h1>
    );
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
