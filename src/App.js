import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Breakfast from './View/Breakfast/Breakfast';
import Families from './View/Families/Families';
import Home from './View/Main/Home';
import Movies from './View/Movies/Movies';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route exact path={'/breakfast'}>
          <Breakfast />
        </Route>
        <Route exact path={'/families'}>
          <Families />
        </Route>
        <Route exact path={'/movies'}>
          <Movies />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
