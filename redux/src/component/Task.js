import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions/actions';
export default function Task({task}) {
  const dispatch = useDispatch();

  const handleEdit = (newDescription) => {
    dispatch(editTask(task.id, newDescription));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };
  return (
    <div>
       <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      <input
        type="text"
        value={task.description}
        onChange={(e) => handleEdit(e.target.value)}
      />
    </div>
  )
}
