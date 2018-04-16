'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options:' : 'No options'
  )
);

var user = {
  name: 'George Richards',
  age: 24,
  location: 'Nottingham'
};
var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
  // return undefined;
};
var userName = 'George Richards';
var userAge = 24;
var userLocation = 'Nottingham';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    userAge
  ),
  getLocation(user.location)
);

var count = 0;
var addOne = function addOne() {
  count++;
  // console.log('addOne', count);
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  // console.log('minusOne');
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  // console.log('reset');
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
