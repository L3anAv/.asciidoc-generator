import {useRoute} from "wouter";
import Home  from "./pages/home/home"
import Editor from './pages/editor/editor'
import Route404 from "./components/404Route/404"
import {RellenarStoreConFijos} from './utils/inciarlizarApp'
import {useBrowserLocation} from 'wouter/use-browser-location'

function App() {

  const [location] = useBrowserLocation();

  RellenarStoreConFijos()
  console.disableYellowBox = true;
  
  if (location === '/editor') {
    return <Editor />;
  }else if(location === '/'){
    return <Home />;
  }else{
    return <Route404 />;
  }
}

export default App
