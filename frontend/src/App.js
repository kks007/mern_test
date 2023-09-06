import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Navbar from './components/Navabar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
          <Routes>
            <Route 
              path = "/"
              element = {<Home></Home>}>

            </Route>
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
