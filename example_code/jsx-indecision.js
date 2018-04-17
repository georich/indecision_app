console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Have your decisions made for you.',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  // target - targets the element the event started on (form)
  // elements - on (form) we have access to all the elements, indexed by name
  // picking name=option which is the input, value gives text submitted

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';

    renderApp();
  }
};

const clearOptions = (e) => {
  app.options = [];
  renderApp();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={clearOptions}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
