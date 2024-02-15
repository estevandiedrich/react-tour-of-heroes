import './App.css';
import Menu from './Menu';

function App({title}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{ title }</h1>
        <Menu/>
      </header>
      <div className="App-body">

      </div>
    </div>
  );
}

export default App;
