import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* red button */}
          <button
            onClick={() => setColor("red")}
            className="outline-dotted px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          {/* green button */}
          <button
            onClick={() => setColor("green")}
            className="outline-dotted px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          {/* blue button */}
          <button
            onClick={() => setColor("blue")}
            className="outline-dotted px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          {/* olive button */}
          <button
            onClick={() => setColor("olive")}
            className="outline-dotted px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          {/* gray button */}
          <button
            onClick={() => setColor("gray")}
            className="outline-dotted px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          {/* yellow button */}
          <button
            onClick={() => setColor("yellow")}
            className="px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>
          {/* pink button */}
          <button
            onClick={() => setColor("pink")}
            className="px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "pink", color: "black"}}
          >
            Pink
          </button>
          {/* purple button */}
          <button
            onClick={() => setColor("purple")}
            className="px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "purple", color: "black" }}
          >
            Purple
          </button>
          {/* lavender button */}
          <button
            onClick={() => setColor("lavender")}
            className="px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "lavender", color: "black" }}
          >
            Lavender
          </button>
          {/* white button */}
          <button
            onClick={() => setColor("white")}
            className="px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "white", color: "black" }}
          >
            White
          </button>
          {/* black button */}
          <button
            onClick={() => setColor("black")}
            className="px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
