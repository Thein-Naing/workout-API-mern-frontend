import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="container">
      <div>
        <Link to='/'>
        <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          </div>
        </nav>
      </div>

    </header>

  )
}

export default Navbar;
