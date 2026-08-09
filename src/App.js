import logo from './logo.svg';
import './App.css';
import Llogin from './login';

function App() {
  return (
    <>
 <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <login />
        <p>
         This is my_blog app
         These are changes
         <br/>
         <p>A new line is added</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
   
  );
}

export default App;
