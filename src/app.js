console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
  </div>
);

const user = {
  name: 'George Richards',
  age: 24,
  location: 'Nottingham'
};
const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>;
  }
  // return undefined;
};
const userName = 'George Richards';
const userAge = 24;
const userLocation = 'Nottingham';
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {userAge}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
