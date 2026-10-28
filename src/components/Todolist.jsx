import { useState } from "react";
function Todolist() {
  // const [todos, setTodos] = useState(["task1", "task2", "task3"])
  const [todos, setTodos] = useState([
    {id:1, text: "task1", completed: false },
    { id:2,text: "task2", completed: false },
    {id:3, text: "task3", completed: false },
  ]);

  const [task, setTask] = useState("");
  
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if (editingIndex != null) {
      const updatedTodo = todos.map((item, index) =>
        index === editingIndex ? { ...item, text: task } : item,
      );
      setTodos(updatedTodo);
      setEditingIndex(null)
      
    } else {
      const newTodo = {
        text: task,
        completed: false,
      };


      const updatedTodo = [...todos, newTodo];
      setTodos(updatedTodo);
    }
      setTask("");
    console.log(todos, "check");
  };
  const deleteTodo = (indexToDelete) => {
    const updatedtodo = todos.filter((item, index) => index !== indexToDelete);
    setTodos(updatedtodo);
  };
  const deleteAll = () => {
    setTodos([]);
  };
  const toggleComplete = (indexToToggle) => {
    //2
    setTodos(
      todos.map((item, index) =>
        index === indexToToggle
          ? { ...item, completed: !item.completed } //    { text: "task3",completed: true },
          : item,
      ),
    );
  };
  console.log(todos);

  const editTodo = (itemToEdit, indexToEdit) => {
    setTask(itemToEdit.text);
    setEditingIndex(indexToEdit);
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
          <div className="pt-8 pb-3">
            <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-2">
              My <span className="text-red-700 text-6xl">Todo</span> List 🔔
            </h1>
            <p className="text-gray-500 text-center mb-8 text-2xl">
              Organize your day, one task at a time.
            </p>
          </div>
          <div className="flex gap-3 mb-8">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="Enter any task..."
              className="flex-1 min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

            <button
              onClick={addTodo}
              className="rounded-xl bg-yellow-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700"
            >
              {editingIndex ? "Update" : "Add"}
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
              {todos.length} tasks
            </span>
          </div>
          <div className="space-y-3">
            {todos.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${item.completed ? "bg-green-400 " : "bg-yellow-200 "} justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-indigo-200 hover:text-white  hover:bg-blue-700`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                    {index + 1}
                  </span>
                  <span
                    className={`font-medium  ${item.completed ? "line-through " : " "} `}
                  >
                    {item.text}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => editTodo(item, index)}
                    className="flex h-8 px-1 items-center justify-center rounded-lg bg-slate-800 text-red-200 font-bold transition hover:bg-red-500 hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="flex h-8 px-1 items-center justify-center rounded-lg bg-red-800 text-red-200 font-bold transition hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => toggleComplete(index)}
                    className={`flex h-8 px-1 items-center justify-center rounded-lg font-bold text-white transition ${
                      item.completed
                        ? "bg-gray-500 hover:bg-gray-600"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {item.completed ? "undo" : "complete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 text-center">
            <button
              onClick={deleteAll}
              className="bg-red-800 border-red-800 text-white rounded-4xl p-2 w-60 font-bold"
            >
              Delete All
            </button>
          </div>
          <div className="mt-8 border-t border-gray-100  text-center text-sm text-gray-400">
            Stay focused. Get things done. 💜
          </div>
        </div>
      </div>
    </>
  );
}
export default Todolist;
