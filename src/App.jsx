import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='con'>
      <nav style={{ backgroundColor: '#282c34', padding: '1rem' }}>
        <div cstyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://t.me/BazingaBlackPortal" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>TELEGRAM</a>
          <a href="https://pump.fun/HBr4GBXUFaVMGWKsTbzUQRJpS2aFLfTgLZi9V1JLpump" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>PUMP.FUN</a>
          <a href="https://x.com/BazingaBlackSol" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>X</a>
        </div>
      </nav>

    </div>
  )
}

export default App
