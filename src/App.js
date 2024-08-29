import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from "./Containers/Home"
import Team from "./Containers/Team"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
