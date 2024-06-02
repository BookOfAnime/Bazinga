import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav style={{ backgroundColor: '#282c34', padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://www.pump.fun" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>TELEGRAM</a>
          <a href="https://www.pump.fun" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>PUMP.FUN</a>
          <a href="https://x.com/BazingaBlackSol" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>X</a>
        </div>
      </nav>
    </>
  )
}

export default App
