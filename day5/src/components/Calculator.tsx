import React from "react";

interface FormInput {
  number1: number | null;
  number2: number | null;
}

export default function SuperSecret() {
  const [total, setTotal] = React.useState<null|number>(0);
  const [formInputs, setFormInputs] = React.useState<FormInput>({ number1: null, number2: null });

  function calculateTotal() {
    setTotal(parseFloat(formInputs.number1 || 0) + parseFloat(formInputs.number2 || 0));
  }

  return (
    <div className="space-y-4 mx-auto">
      <h2 className='text-center text-2xl'>Adding two Numbers</h2>
      <form onSubmit={(e) => { e.preventDefault(); calculateTotal() }} className="text-gray-900 grid gap-4">
        <div className="grid grid-rows sm:grid-cols-2 gap-4 text-4xl">
          <input type="number" step="0.1" className="px-1 py-2 text-center text-purple-500 bg-purple-200 rounded" onChange={(e) => setFormInputs({ ...formInputs, number1: parseFloat(e.target.value) })} />
          <input type="number" step="0.1" className="px-1 py-2 text-center text-purple-500 bg-purple-200 rounded" onChange={(e) => setFormInputs({ ...formInputs, number2: parseFloat(e.target.value) })} />
        </div>
        <div className="mx-auto">
          <button className="p-4 bg-purple-800 text-purple-200 rounded-tl-lg rounded-br-lg rounded-tr-2xl rounded-bl-2xl" type="submit">Add Them!</button>
        </div>
      </form>
      <div className="text-center font-bold text-5xl">
        <p>{total}</p>
      </div>
    </div >
  )
}
