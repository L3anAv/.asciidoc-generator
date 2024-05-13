import Home  from "./pages/home/home"
import {Switch, Route} from "wouter";
import Editor from './pages/editor/editor'
import {RellenarStoreConFijos} from './utils/inciarlizarApp'

function App() {

  RellenarStoreConFijos()
  console.disableYellowBox = true;

  return (

          <Switch>
            <Route path="/" component={Home} />
            <Route path="/editor" component={Editor} />

            <Route>404: Not file</Route>
          </Switch>
          
  )
}

export default App
