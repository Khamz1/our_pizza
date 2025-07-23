import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Menu } from './pages/Menu/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart/Cart'
import { Order } from './pages/Order/Order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Header/>

     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/order' element={<Order/>}/>

     </Routes>
     {/* <Footer/> */}
     </BrowserRouter>

    </>
        )
}

        export default App
