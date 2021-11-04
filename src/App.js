import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom"
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <h1>ROUTING PRACTICE</h1>
      <BrowserRouter>
        <h1>Home</h1>
        <p>
          <Link to="/home">Home</Link>
          |
          <Link to="/">Base page</Link>
          |
        </p>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/"></Route>
          <Route exact path="/number/:num">
            <Number></Number>
          </Route>
          <Route exact path="/word/:word">
            <Word></Word>
          </Route>
          <Route exact path="/hello/:bcolor/:wcolor">
            <Hello></Hello>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
