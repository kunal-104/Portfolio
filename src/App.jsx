import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import { useState } from 'react'
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = ()=>{
    if(menuOpen){
      setMenuOpen(false);
    }
  }
  return (
    <div onClick={handleClick} className={styles.App}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
