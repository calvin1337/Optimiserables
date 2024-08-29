import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Containers/Contact';
import Home from "./Containers/Home"
import Team from "./Containers/Team"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Contact />
    </div>
  );
}

export default App;
