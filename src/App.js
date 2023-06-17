import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
// import WorkoutForm from './components/WorkoutForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='pages'>
          <Routes>

            <Route
            path="/"
            element={ <Home />}
            />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
