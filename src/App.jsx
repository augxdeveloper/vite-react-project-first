import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Layout>
        <div>
          <h1>My nname is bikash</h1>
        </div>
      </Layout>
    </>
  )
}

export default App
