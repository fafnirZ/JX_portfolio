import logo from './logo.svg';
import Navbar from "./Components/Nav/nav.js"
import Body from "./Components/Body/body.js"
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      	<Navbar/>

      </header>
      <body className = "App-body">
      	<Body/>
      </body>
    </div>

  );
}

export default App;
