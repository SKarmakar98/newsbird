// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBody from "./Components/NewsBody";
// import NewsCrd from "./Components/NewsCrd";

function App() {
  return (
    <div className="App">
      <Navbar title="News Bird"/>
      <NewsBody/>
      {/* <RoutConfig/> */}
    </div>
  );
}

export default App;
