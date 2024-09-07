import './App.css'
import AboutComponent from './components/Home/AboutComponent'
import BlogSectionComponent from './components/Home/BlogSectionComponent'
import DesignedForComponent from './components/Home/DesignedForComponent'
import FeatureComponent from './components/Home/FeatureComponent'
import HeroComponent from './components/Home/HeroComponent'
import HowWorks from './components/Home/HowWorks'
import JoinTelegram from './components/Home/JoinTelegram'
import MissionComponent from './components/Home/MissionComponent'
import NavBarComponent from './components/Home/NavBarComponent'
import PassionComponent from './components/Home/PassionComponent'
import SignUpComponent from './components/Home/SignUpComponent'
import TestimonyComponent from './components/Home/TestimonyComponent'
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
      <HowWorks />
      <FeatureComponent />
      <JoinTelegram />
      <SignUpComponent />
      <TestimonyComponent />
      <BlogSectionComponent />
    </>
  )
}

export default App
