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

let count = 0;
const addOne = () => {
  count++;
  // console.log('addOne', count);
  renderCounterApp();
};
const minusOne = () => {
  count--;
  // console.log('minusOne');
  renderCounterApp();
};
const reset = () => {
  count = 0;
  // console.log('reset');
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
