import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import MuscleGroups from './MuscleGroups';
import MuscleGroup from './MuscleGroup';


function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/muscle-groups" element={<MuscleGroups />}/>
          <Route path="/muscle-groups/:id" element={<MuscleGroup />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
