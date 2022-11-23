import "./App.css";
import Banner2 from "./Components/Banner2/Banner2";
import Intro from "./Components/Intro/Intro";
import Games from "./Components/Games/Games";
import Console from "./Components/Console/Console";
import Compatibility from "./Components/Compatibilty/Compatibility";

function App() {
  return (
    <div className="app">
      <Intro />
      <Console />
      <Banner2 />
      <Games
        isPS2
        title="Explore PS2 Games"
        platform="15"
        searchEngine="ps2Search"
        id="ps2"
      />
      <Compatibility/>
      <Games
        isPSX
        title="Explore PSX Games"
        platform="27"
        searchEngine="psxSearch"
        id="psx"
      />
    </div>
  );
}

export default App;
