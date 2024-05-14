import {useRoute } from "wouter";
import Home  from "./pages/home/home"
import Editor from './pages/editor/editor'
import Route404 from "./components/404Route/404"
import {RellenarStoreConFijos} from './utils/inciarlizarApp'

function App() {

  const [matchEditor, ] =   useRoute('/editor')
  const [matchHome, ] =   useRoute('/')

  RellenarStoreConFijos()
  console.disableYellowBox = true;
  
  if (matchEditor) {
    return <Editor />;
  }else if(matchHome){
    return <Home />;
  }else{
    return <Route404 />
  }
}

export default App
