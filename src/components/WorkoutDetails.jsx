import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//import useAuthContext to authorize user
import { useAuthContext } from "../hooks/useAuthContext";


//date fns.
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

     // we will authorize user. destructure by grabbing from useAuthContext
     const { user } = useAuthContext();

  const handleClick = async () => {

    if(!user) {
      return
    }
    const response = await fetch(
      // "http://localhost:4000/api/workouts/" + workout._id,
      "https://workoutbuddy-59wj.onrender.com/api/workouts/" + workout._id,
      {
        method: "DELETE",
        // add headers.
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>

      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
