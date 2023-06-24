// import navigate hook to redirect user to individual routes
//import useAuthContext to authorize user

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useAuthContext } from "./hooks/useAuthContext";


function App() {
 // we will authorize user. destructure by grabbing from useAuthContext
    const { user } = useAuthContext();

 //use ternary operator to navigate individual route.

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='pages'>
          <Routes>

            <Route
            path="/"
            element={ user ? <Home /> : < Navigate to='/login' />}
            />

            <Route
            path="/signup"
            element={ !user ? <Signup /> : <Navigate to='/' />}
            />

            <Route
            path="/login"
            element={!user ? <Login /> : <navigate to='/' />}
            />

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
