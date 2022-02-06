import { useState } from "react";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const moveBy = 50;

  function moveUp() {
    setOffsetY(offsetY - moveBy);
  }

  function moveLeft() {
    setOffsetX(offsetX - moveBy);
  }

  function moveRight() {
    setOffsetX(offsetX + moveBy);
  }

  function moveDown() {
    setOffsetY(offsetY + moveBy);
  }

  function reset() {
    setOffsetY(0);
    setOffsetX(0);
  }

  return (
    <div className="h-screen items-center justify-center bg-emerald-600 p-8 text-white">
      <h2 className="text-center text-2xl">Move the box!</h2>
      <div className="container relative mx-auto h-full p-8">
        <div className="absolute left-0 top-1/2 bottom-1/2 flex items-center justify-center">
          <button
            className="rounded border border-blue-600 bg-blue-500 px-4 py-2 capitalize"
            type="button"
            onClick={moveLeft}
          >
            left
          </button>
        </div>
        <div className="absolute top-0 left-1/2 right-1/2 mt-10 flex items-center justify-center">
          <button
            className="rounded border border-blue-600 bg-blue-500 px-4 py-2 capitalize"
            type="button"
            onClick={moveUp}
          >
            up
          </button>
        </div>
        <div className="absolute right-0 top-1/2 bottom-1/2 flex items-center justify-center">
          <button
            className="rounded border border-blue-600 bg-blue-500 px-4 py-2 capitalize"
            type="button"
            onClick={moveRight}
          >
            right
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 right-1/2 mb-10 flex items-center justify-center">
          <button
            className="rounded border border-blue-600 bg-blue-500 px-4 py-2 capitalize"
            type="button"
            onClick={moveDown}
          >
            down
          </button>
        </div>
        <div className="absolute top-1/2 bottom-1/2 left-1/2 right-1/2 mb-10 flex items-center justify-center">
          <button
            className="rounded border border-blue-600 bg-blue-500 px-4 py-2 capitalize"
            type="button"
            onClick={reset}
          >
            reset
          </button>
        </div>

        {/* the box that get moved arround */}
        <div
          className="absolute top-1/2 bottom-1/2 left-1/2 right-1/2 flex translate-y-[offset[0]] transform items-center justify-center"
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          }}
        >
          <span className="rounded bg-red-400 p-8">hey</span>
        </div>
      </div>
    </div>
  );
}

export default App;
