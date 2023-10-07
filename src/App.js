import {BrowserRouter,Route,Routes} from  "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Index from './pages/Index/Index';




function App(){
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Index/>} />
    </Routes>
    </BrowserRouter>
  );
}

    

export default App;
