import Home  from "./pages/home/home"
import {Switch,Router, Route} from "wouter";
import Editor from './pages/editor/editor'
import {RellenarStoreConFijos} from './utils/inciarlizarApp'

function App() {

  RellenarStoreConFijos()
  console.disableYellowBox = true;

  return (
      <Router base="/.asciidoc-generator">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/editor" component={Editor} />

            <Route>404: Not file</Route>
          </Switch>
      </Router>
  )
}

export default App
