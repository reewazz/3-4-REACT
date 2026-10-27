
import React, { useState } from 'react'

const Todolist = () => {
  const [todos, setTodos] = useState(["task1", "task2", "task3"])
  const [task,setTask] = useState("")


    const addTodo = ()=> {
        //todos arrayma task ko value thapina paryo

        const updatedTodo = [...todos,task]
            setTodos(updatedTodo)
            setTask("")
        console.log(todos,"check")
    }

    const deleteTodo = (indexToDelete)=> {
            const updatedtodo = todos.filter((item,index)=> index !== indexToDelete)
            setTodos(updatedtodo)
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          My Todo List ✨
        </h1>

        <p className="text-gray-500 mb-8">
          Organize your day, one task at a time.
        </p>

        <div className="flex gap-3 mb-8">
          <input
          value={task}
          onChange={(e)=>setTask(e.target.value)}
            type="text"
            placeholder="Enter any task..."
            className="flex-1 min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <button onClick={addTodo} className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700">
            Add
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Tasks
          </h2>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
            {todos.length} tasks
          </span>
        </div>

        <div className="space-y-3">
          {todos.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-indigo-200 hover:bg-indigo-50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                  {index + 1}
                </span>

                <span className="font-medium text-gray-700">
                  {item}
                </span>
              </div>

              <button onClick={()=>deleteTodo(index)} className="flex h-8 px-2 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
           Delete
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-100 pt-5 text-center text-sm text-gray-400">
          Stay focused. Get things done. 💜
        </div>

      </div>
    </div>
  )
}

export default Todolist
