var React = require('react');
var ReactDOM = require('react-dom');

const Hello = () => {
  return <h1 className="red">
    ES6 Hello!
  </h1>
}


var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));