// function based component
// App -> root
import About from "./components/About";

function App() {
  // JSX: javascript syntax extension. allow to write html look like syntax inside js code

  return (
    <>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
      repellendus, commodi architecto illo eaque ipsa itaque, nihil numquam iste
      dolore repellat suscipit dolorem enim. Magni fugit veritatis facilis dicta
      qui.
      <About />
    </>
  );
}

export default App;

// jsx -> js
// babel transpile your code form jsx -> js
