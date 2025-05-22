import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:5000/api')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error('Error: ',err));
  },[]);

  return (
    <>
    <div className='bg-red-500'>
      <h1 class="text-3xl font-bold underline">
        {message}
      </h1>
    </div>
    </>
  )
}

export default App
