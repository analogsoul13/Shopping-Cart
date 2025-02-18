import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wish from './pages/Wish'
import View from './pages/View'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wish' element={<Wish/>}/>
    </Routes>
    <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App
