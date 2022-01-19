import usersData from './data/users.json'

function App() {
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className='h-full w-full sm:h-auto sm:w-auto p-4 bg-white sm:rounded'>
        <h2>iterate over Array and display data</h2>
        <div className='mt-2 space-y-4'>
          { usersData.map((user, index) => (
            <div className='bg-blue-300 rounded p-2 space-y-2' key={index}>
              <h3>{user.name}</h3>
              <p>{user.location}</p>
              <p>{user.car}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
