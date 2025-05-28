import { useState, useEffect } from 'react'
import axios from 'axios'
import HomeLayout from './layout/User/HomeLayout';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error('Error: ', err));
  }, []);

  return (
    <>
      <HomeLayout />
    </>
  )
}

export default App
