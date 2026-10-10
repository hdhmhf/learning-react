import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <main className="landing">
      <img
        className="landing__hero"
        src={heroImg}
        alt="Abstract layered geometric shape in purple"
      />
    </main>
  )
}

export default App
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
    </>
  )
}

export default App
