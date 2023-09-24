import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Teams from "./components/teams";
import Calamity from "./components/Calamity";
import './App.css'
import Details from "./components/Details";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="fusion">
      <Map />
      <Details/>
      </div>
      <div className="column">
        <Teams />
        <Calamity />
      </div>
    </>
  );
}
export default App