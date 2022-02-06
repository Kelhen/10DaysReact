import { useState } from 'react';
import SuperSecret from './components/SuperSecret';

function App() {
  return (
    <div className="h-screen bg-green-600 text-white flex items-center justify-center">
      <div className='h-full w-full sm:h-auto sm:w-3/4 p-4 sm:rounded'>
        <SuperSecret />
      </div>
    </div>
  )
}

export default App
