import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Containers/Contact';
import Home from "./Containers/Home"
import Team from "./Containers/Team"
import Upcoming from './Containers/Upcoming';
import WhoAreWe from './Containers/WhoAreWe';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <WhoAreWe />
      <Upcoming />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
