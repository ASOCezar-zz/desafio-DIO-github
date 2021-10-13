import react from "react";
import reactDom from "react-dom";
import "./styles.css";


const App = () => {
  return (
    <div>
      <h2>Hello World!!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);
