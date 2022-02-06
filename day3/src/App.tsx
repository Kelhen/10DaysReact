import UserForm from './components/UserForm';

function App() {
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className='h-full w-full sm:h-auto sm:w-3/4 p-4 bg-white sm:rounded'>
        <h2 className='text-center text-2xl'>Update Data from an input</h2>
        <UserForm />
      </div>
    </div>
  )
}

export default App
