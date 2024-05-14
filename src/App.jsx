import {Switch, Route} from "wouter";
import Home  from "./pages/home/home"
import Editor from './pages/editor/editor'
import Route404 from "./components/404Route/404"
import {RellenarStoreConFijos} from './utils/inciarlizarApp'

function App() {

  RellenarStoreConFijos()
  console.disableYellowBox = true;
  
  return(
  <Switch>
    <Route path="/" component={Home}/>
    <Route path="/editor" component={Editor}/>

    <Route><Route404/></Route>
  </Switch>
  )
}

export default App
