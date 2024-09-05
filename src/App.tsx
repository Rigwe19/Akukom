import './app.css'
import AboutComponent from './components/Home/AboutComponent'
import DesignedForComponent from './components/Home/DesignedForComponent'
import HeroComponent from './components/Home/HeroComponent'
import MissionComponent from './components/Home/MissionComponent'
import NavBarComponent from './components/Home/NavBarComponent'
import PassionComponent from './components/Home/PassionComponent'
import VisionComponent from './components/Home/VisionComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComponent />
      <HeroComponent />
      <AboutComponent />
      <VisionComponent />
      <MissionComponent />
      <PassionComponent />
      <DesignedForComponent />
    </>
  )
}

export default App
