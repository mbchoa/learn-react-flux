var React = require('react');
var ReactDOM = require('react-dom');
var DropDown = require('./dropdown');

var options = {
  title: 'Choose a desert', // what should show up on the button to open/close the drop down
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
}

var element = React.createElement(DropDown, options);
ReactDOM.render(element, document.querySelector('.container'));
