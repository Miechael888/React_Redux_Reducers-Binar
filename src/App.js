import logo from "./logo.svg";
import "./App.css";
import Card from "./component/Card";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Card />
      </div>
    </div>
  );
}

export default App;
