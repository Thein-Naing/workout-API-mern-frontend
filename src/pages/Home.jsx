import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//import useAuthContext to authorize user
import { useAuthContext } from "../hooks/useAuthContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  // replace useState with context.
  // const [workouts, setWorkouts] = useState(null);
  //destructure useWorkoutsContext
  const { workouts, dispatch } = useWorkoutsContext();

  // we will authorize user. destructure by grabbing from useAuthContext
  const { user } = useAuthContext();

  // useEffect will fire a function when a component is rendered.
  //But we only want to fire once so provide dependency array as 2nd argument.
  useEffect(() => {
    const fetchWorkouts = async () => {
      // const response = await fetch("http://localhost:4000/api/workouts");

      // add authorization headers inside fetch also
      const response = await fetch("https://workoutbuddy-59wj.onrender.com/api/workouts", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });

      const json = await response.json();

      if (response.ok) {
        // replace setWorkouts with dispatch.
        // setWorkouts(json);
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    // update fetchWorkouts() with if user exist

    if (user) {
      fetchWorkouts();
    }

    // fetchWorkouts();
    //also update dependency array with user
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
