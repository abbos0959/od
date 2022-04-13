import "./App.css";
import { Asos } from "./component/Asos";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import { Wrap } from "./component/Wrap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Asos/>
      <Wrap/>
      <Footer/>
    </div>
  );
}

export default App;
