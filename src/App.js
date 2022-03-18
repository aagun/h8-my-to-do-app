import { useEffect, useState } from 'react';

import Modal from './components/Modal';
import Task404 from './components/Task404';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(['Beribadah', 'Mengaji', 'Ngoding', 'Menabung']);
  localStorage.setItem('temp', tasks);

  const [taskInput, setTaskInput] = useState('');
  const [taskEdit, setTaskEdit] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (e) => {
    setTaskInput(e.target.value);
  };

  const saveTask = (e) => {
    e.preventDefault();

    if (!taskInput) {
      return setMessage('Input task dulu kak!'); // set error message when user not input any thing
    }

    // edit data
    if (taskEdit) {
      const updateTasks = [...tasks];

      updateTasks[taskEdit - 1] = taskInput; // get task from tasks by index
      setTasks(updateTasks); // update tasks
      setTaskInput(''); // reset input form
      setMessage(''); // close message if there's message
      return setTaskEdit(''); // reset helper variable edit
    }

    const newTasks = [taskInput, ...tasks];
    localStorage.setItem('temp', [newTasks]); // store data tasks to local-storage

    setTasks(newTasks); // add new task to tasks
    setTaskInput(''); // reset input form
    setMessage(''); // close message if there's message
  };

  const deleteTask = (id) => {
    const updateTasks = tasks.filter((_, index) => index !== id); // filter data where data is not picked to delete
    setTasks(updateTasks); // update data
    setIsOpen(false); // close dialog
    setDeleteId(''); // reset helper variable delete
  };

  const editTask = (id) => {
    setTaskEdit(id + 1); // set helper variable edit
    setTaskInput(tasks[id]); // set edit task input form
  };

  const handleCancel = () => {
    if (setDeleteId) {
      setIsOpen(false); // close dialog
      setDeleteId(''); // reset helper variable delete
      return;
    }

    setTaskEdit(''); // reset helper variable edit
    setTaskInput(''); // reset input form
  };

  const handleDelete = (id) => {
    setDeleteId(id); // set data to helper variable delete
    setIsOpen(true); // open modal
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const query = value.toLowerCase();
    const arr = localStorage.getItem('temp').toString().split(',');

    if (!value) {
      return setTasks(arr); // rollback data if search input empty
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      const result = arr.filter((item) => item.toLowerCase().indexOf(query) >= 0); // rollback data when user hit backspace key or delete key
      return setTasks(result);
    }

    const result = tasks.filter((item) => item.toLowerCase().indexOf(query) >= 0); // display searched task
    return setTasks(result);
  };

  useEffect(() => {
    console.log(tasks);
  });

  return (
    <section className="relative">
      <div className="mx-12 h-screen py-8">
        <h1 className=" text-2xl sm:text-3xl font-medium mb-4">Simple To-do App</h1>
        <TaskInput
          message={message}
          saveTask={saveTask}
          taskInput={taskInput}
          taskEdit={taskEdit}
          handleInput={handleInput}
          handleCancel={handleCancel}
        />

        <div className="flex flex-col gap-4 sm:flex-row justify-between my-8 ">
          <h3 className="text-lg sm:text-2xl font-sans font-medium">Daftar tugas</h3>
          <input
            type="text"
            onChange={handleSearch}
            onKeyUp={handleSearch}
            placeholder="Cari tugas"
            className="rounded border-2 border-neutral-200 focus:border-cyan-500 focus:shadow-none focus:ring-0"
          />
        </div>
        {tasks.length > 0 ? <TaskList data={tasks} editTask={editTask} handleDelete={handleDelete} /> : <Task404 />}
      </div>

      <Modal
        isOpen={isOpen}
        data={tasks[deleteId]}
        deleteTask={() => deleteTask(deleteId)}
        handleCancel={handleCancel}
      />
    </section>
  );
}

export default App;
