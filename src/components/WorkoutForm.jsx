import React, { useState } from 'react';
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'

//import useAuthContext to authorize user
import { useAuthContext } from "../hooks/useAuthContext";


const WorkoutForm = () => {
  const {dispatch} = useWorkoutsContext()

    // we will authorize user. destructure by grabbing from useAuthContext
    const { user } = useAuthContext();

    const[title, setTitle] = useState('');
    const[load, setLoad] = useState('');
    const[reps, setReps] = useState('');
    const[error, setError] = useState(null);
    const[emptyFields, setEmptyFields] = useState([]);


    const handleSubmit = async (e)=> {
      e.preventDefault();
      if(!user) {
        setError('You must be logged in')
        return
      }
      const workout = { title, load, reps}

        // const response = await fetch('http://localhost:4000/api/workouts', {
        const response = await fetch('https://workoutbuddy-59wj.onrender.com/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json',
          // add authorization headers
          'Authorization': `Bearer ${user.token}`
        }

      })
        const json = await response.json()
        if (!response.ok) {
          setError(json.error)
          setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
          setTitle('')
          setLoad('')
          setReps('')
          setError(null)
          setEmptyFields([])
          console.log('new workout added', json)
          dispatch({type:'CREATE_WORKOUT', payload:json})
        }
    }

    return (

    <form className='create' onSubmit={handleSubmit}>
      <h3>Add new workout</h3>
      <label>Workout title</label>
      <input
      type='text'
      onChange={(e)=> setTitle (e.target.value)}
      value={title}
      className={emptyFields.includes(title) ? 'error' :''}
      />

      <label>Load (in kg) </label>
       <input
      type='number'
      onChange={(e)=> setLoad (e.target.value)}
      value={load}
      className={emptyFields.includes(load) ? 'error' :''}
      />

      <label>Reps:</label>
       <input
      type='number'
      onChange={(e)=> setReps (e.target.value)}
      value={reps}
      className={emptyFields.includes(reps) ? 'error' :''}
      />

      <button>Add</button>
      {error && <div className='error'>{error}</div>}
    </form>
     )
}

export default WorkoutForm;
