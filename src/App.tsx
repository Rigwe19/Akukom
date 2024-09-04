// import { useState } from 'react'
// import './assets/css/style.css'
// import './assets/css/bootstrap.min.css'
import AboutComponent from './components/AboutComponent'
import HeroComponent from './components/HeroComponent'
import NavBarComponent from './components/NavBarComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComponent />
      <HeroComponent />
      <AboutComponent />
    </>
  )
}

export default App
