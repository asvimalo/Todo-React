var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

console.log('State: ', store);

store.subscribe(() => {
  console.log('New State', store.getState());
});
store.dispatch(actions.addTodo('Eat some good food at midday'));
store.dispatch(actions.setSearchText('Eat'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css');
//$(document).foundation();
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
