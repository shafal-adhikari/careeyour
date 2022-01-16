import "./App.css";
import BrowseJobs from "./pages/BrowseJobs";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <BrowseJobs />
    </div>
  );
}

export default App;
