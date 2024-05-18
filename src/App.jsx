import {Switch, Route} from "wouter"
import Home  from "./pages/home/home"
import Editor from './pages/editor/editor'
import useIsMobile from './hooks/useIsMobile'
import Route404 from "./components/404Route/404"
import MobileNot from "./components/MobileNot/mobileNot"
import {RellenarStoreConFijos} from './utils/inciarlizarApp'

function App() {

  RellenarStoreConFijos()
  console.disableYellowBox = true;

  const ComponenteHome = useIsMobile(Home, MobileNot)
  const ComponenteEditor = useIsMobile(Editor, MobileNot)

  return(
  <Switch>
    <Route path="/" component={ComponenteHome}/>
    <Route path="/editor" component={ComponenteEditor}/>

    <Route><Route404/></Route>
  </Switch>
  )
}

export default App
