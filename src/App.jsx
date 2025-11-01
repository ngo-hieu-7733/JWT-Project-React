import { useEffect } from 'react'
import './App.css'
import axios from './util/axios.customize'

function App() {
  useEffect(() => { 
    const fetchData = async () => {
      const res = axios.get(`/v1/api`)
      console.log(">>> Check res: ", res)
    }
    fetchData()
  }, [])
  return (
    <>
      hello worold      
    </>
  )
}

export default App
