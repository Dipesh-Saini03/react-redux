import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'



function App(){
  return(
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>

        <Route>
        <Route path='/' element={<Home />} />
        



        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Footer/> */}







    </div>



  )
}
export default App