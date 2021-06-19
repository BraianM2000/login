import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './views/signin';
import { Signup } from './views/signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
