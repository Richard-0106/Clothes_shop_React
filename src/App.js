import { Routes,Route } from 'react-router-dom';
import SignIn from './routes/sign-in/sign-in.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component.jsx'

  const Shop=()=>{
    return <h1>I am the shop</h1>
  }
const App=()=> {

  return (

    <Routes>

      <Route path='/' element={<Navigation />}>

      <Route index element={<Home />}></Route> 
      {/* match the path=/ */}
      <Route path='shop' element={<Shop></Shop>}></Route>
      <Route path='sign-in' element={<SignIn></SignIn>}></Route>

      </Route>
    </Routes>
  
  )
}

export default App;
