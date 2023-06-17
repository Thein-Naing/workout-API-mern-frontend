import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  // replace useState with context.
  // const [workouts, setWorkouts] = useState(null);
  //destructure useWorkoutsContext
  const { workouts, dispatch } = useWorkoutsContext();

  // useEffect will fire a function when a component is rendered.
  //But we only want to fire once so provide dependency array as 2nd argument.
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("https://workoutbuddy-api-q0yb.onrender.com");
      const json = await response.json();

      if (response.ok) {
        // replace setWorkouts with dispatch.
        // setWorkouts(json);
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

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
