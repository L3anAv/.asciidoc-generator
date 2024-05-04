import Home  from "./pages/home/home"
import {Route, Switch } from "wouter";
import Editor from './pages/editor/editor'
import {RellenarStoreConFijos} from './utils/inciarlizarApp'

function App() {

  RellenarStoreConFijos()
  console.disableYellowBox = true;

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/editor" component={Editor} />

      {/* Pagina default */}
      <Route>404: No such page!</Route>
    </Switch>
  )
}

export default App
