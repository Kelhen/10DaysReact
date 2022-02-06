import React from "react";

interface FormInput {
  number1: number | null;
  number2: number | null;
}

export default function SuperSecret() {
  const [total, setTotal] = React.useState<null | number>(0);
  const [formInputs, setFormInputs] = React.useState<FormInput>({
    number1: null,
    number2: null,
  });

  function calculateTotal() {
    setTotal(
      parseFloat(formInputs.number1 || 0) + parseFloat(formInputs.number2 || 0)
    );
  }

  return (
    <div className="mx-auto space-y-4">
      <h2 className="text-center text-2xl">Adding two Numbers</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateTotal();
        }}
        className="grid gap-4 text-gray-900"
      >
        <div className="grid-rows grid gap-4 text-4xl sm:grid-cols-2 ">
          <input
            type="number"
            step="0.1"
            className="rounded bg-purple-200 px-1 py-2 text-center text-purple-500"
            onChange={(e) =>
              setFormInputs({
                ...formInputs,
                number1: parseFloat(e.target.value),
              })
            }
          />
          <input
            type="number"
            step="0.1"
            className="rounded bg-purple-200 px-1 py-2 text-center text-purple-500"
            onChange={(e) =>
              setFormInputs({
                ...formInputs,
                number2: parseFloat(e.target.value),
              })
            }
          />
        </div>
        <div className="mx-auto">
          <button
            className="rounded-tl-lg rounded-br-lg rounded-tr-2xl rounded-bl-2xl bg-purple-800 p-4 text-purple-200"
            type="submit"
          >
            Add Them!
          </button>
        </div>
      </form>
      <div className="text-center text-5xl font-bold">
        <p>{total}</p>
      </div>
    </div>
  );
}
