import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
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

            <Route
            path="/signup"
            element={ <Signup />}
            />

            <Route
            path="/login"
            element={ <Login />}
            />

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
