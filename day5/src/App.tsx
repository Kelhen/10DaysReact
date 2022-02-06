import { useState } from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="h-screen bg-purple-600 text-white flex items-center justify-center">
      <div className='h-full w-full sm:h-auto sm:w-3/4 p-4 sm:rounded'>
        <Calculator />
      </div>
    </div>
  )
}

export default App
