import { Name } from "./components/user/name";
import { Location } from "./components/user/location";
import { UserProvider } from "./context/UserContext";
import { UserForm } from "./components/user/UserForm";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4  p-8">
      <div className="container space-y-2">
        <UserProvider>
          <p className="text-xl">
            We'll use the React Context API to pass and receive data in any
            component
          </p>
          <UserForm />
          <div className="p-4">
            <Name />
            <Location />
          </div>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
