import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Poke from './components/pages/Poke';
import PokeCard from './components/pages/Poke/Pokecard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Poke} />
        <Route path="/poke/:id" exact component={PokeCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
