import { useState } from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import { Outlet } from 'react-router-dom'
import { LoginModalProvider } from './context/LoginModalContext'


function App() {
  const [count, setCount] = useState(0)
  return (
    <LoginModalProvider>
     <Header/>
     <Outlet/>
     <Footer/>
     
    </LoginModalProvider>
      
  )
}

export default App
