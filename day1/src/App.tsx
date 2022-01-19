import userData from './data/user.json'
import { UserCard } from './components/UserCard'

function App() {
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <UserCard userData={ userData } />
    </div>
  )
}

export default App
