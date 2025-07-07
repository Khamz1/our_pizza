import { useState } from 'react'
import { Header } from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Menu } from './pages/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home />}/>
         <Route path='cart' element={<Menu/>}/>
          </Routes>
          </BrowserRouter>
        </>
        )
}

        export default App
