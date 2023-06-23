import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //invoke useSignup hook
  const {signup, error, isLoading} = useSignup();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    //replace with useSignup hook state
    await signup(email, password)


  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Signup</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
            <button disable={isLoading}>Sign up</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

// disable button when isLoading is false.


export default Signup;
