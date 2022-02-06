import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-purple-600 text-white">
      <div className="h-full w-full p-4 sm:h-auto sm:w-3/4 sm:rounded">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
