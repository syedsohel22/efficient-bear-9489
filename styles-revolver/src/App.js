import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import AllRoutes from "./Components/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />

      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
