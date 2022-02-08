interface ThingsType {
  icon: string;
  label: string;
  number: number;
}

function Card({ icon, label, number }: ThingsType) {
  return (
    <section className="flex-0 w-full flex-col rounded bg-white px-8 py-4 text-gray-800 shadow-lg">
      <p>
        {icon} <span className="ml-2">{label}</span>
      </p>
      <p className="text-2xl font-bold sm:text-4xl lg:text-6xl">
        {number.toLocaleString()}
      </p>
    </section>
  );
}

function App() {
  const things: ThingsType[] = [
    { icon: "🍎", label: "Apples", number: 5365476 },
    { icon: "🍌", label: "Bananas", number: 42 },
    { icon: "🍊", label: "Oranges", number: 200012 },
    { icon: "🍇", label: "Grapes", number: 126326653 },
  ];
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4 bg-sky-400 p-8">
      {things.map((thing, index) => (
        <Card {...thing} key={index} />
      ))}
    </div>
  );
}

export default App;
