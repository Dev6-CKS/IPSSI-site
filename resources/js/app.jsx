var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-component');

window.React = React;
window._ = require('lodash');
window.misc = require('./misc');

//Locations
var Locations = Router.Locations;
var Location = Router.Location;

//Components
var Home = require('./components/home/HomeComponent.jsx');

var App = React.createClass({
  render: function() {
    return (
      	<Locations hash>
        	<Location path="/" handler={Home} />
      	</Locations>
    );
  }
});

ReactDOM.render(<App/>, document.querySelector('#container'));