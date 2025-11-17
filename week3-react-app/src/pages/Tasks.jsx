import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (input) setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (i) => {
    const updated = [...tasks];
    updated[i].completed = !updated[i].completed;
    setTasks(updated);
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true :
    filter === 'active' ? !task.completed :
    task.completed
  );

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} className="border p-2" />
      <button onClick={addTask}>Add</button>
      <div>
        {filteredTasks.map((task, i) => (
          <div key={i} className="flex justify-between">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <button onClick={() => toggleTask(i)}>Toggle</button>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
    </div>
  );
}