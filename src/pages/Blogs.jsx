
import { Edit2, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Blogs = () => {
    const blogfromlocal = JSON.parse(localStorage.getItem("blogData")) || []

  const [blogs, setBlogs] = useState(blogfromlocal)

    const userValue = {
        name : "amosh",
        address : "balaju"
    }


useEffect(()=> {
localStorage.setItem("name","riwaj")
localStorage.setItem("address","lagankhel")
localStorage.setItem("user",JSON.stringify(userValue))
  localStorage.setItem("blogData",JSON.stringify(blogs))
},[])


  // Form State
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    category: '',
    description: '',
    author: '',
    publishDate: ''
  })

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Add Blog Function
  const addBlog = (e) => {
   try{
     e.preventDefault()


    if(!editingId) {

    const newBlog = {
      ...formData,
      id: Date.now()
    }

    setBlogs((prev) => [...prev, newBlog])

}
else {
        const updatedData = blogs.map((item)=> (
            item.id === editingId ? {...item,...formData} : item
        ))
        setBlogs(updatedData)
        setEditingId(null)
}
    
    setFormData({
      image: '',
      title: '',
      category: '',
      description: '',
      author: '',
      publishDate: ''
    })
    setShow(false)
   }
   catch(err) {
    console.log(err)
   }
  }


  
  // Delete Blog Function
  const deleteBlog = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id))
  }

  const [show,setShow] = useState(false)
  const [editingId,setEditingId] = useState(null)


  const editBlog = (idToEdit,blogData)=> {
   setEditingId(idToEdit)
    setShow(true)
    setFormData(blogData)
    
  }

  return (
    <div>
      <div>
        <button onClick={()=>setShow(true)}>+ Add Blog</button>
      </div>

      {/* Add Blog Form */}
      {show &&(
      <>
{/* Modal Overlay */}
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

  {/* Modal Content */}
  <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 shadow-2xl">

    {/* Modal Header */}
    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-5">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Add New Blog
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Fill in the details to publish a new blog.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShow(false)}
        className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-500 transition"
      >
        ✕
      </button>
    </div>

    {/* Modal Form */}
    <form className="flex flex-col gap-5 p-6" onSubmit={addBlog}>

      {/* Image URL */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Image URL
        </label>
        <input
          type="url"
          name="image"
          placeholder="Enter image URL"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        />
      </div>

      {/* Blog Title */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Blog Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Enter blog title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        />
      </div>

      {/* Category & Author */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Author
          </label>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          />
        </div>

      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Description
        </label>
        <textarea
          name="description"
          rows="4"
          placeholder="Write your blog description..."
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        />
      </div>

      {/* Publish Date */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Publish Date
        </label>
        <input
          type="date"
          name="publishDate"
          value={formData.publishDate}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        />
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 pt-5">

        <button
          type="button"
          onClick={() => setShow(false)}
          className="rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-2.5 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 active:scale-95 transition"
        >
          Add Blog
        </button>

      </div>
    </form>
  </div>
</div>
</>
      )

}

      <hr />

      {/* Display Blogs */}
      <div className='grid grid-cols-4 gap-4'>
        {blogs?.map((blog) => (
          <div className='border border-gray-200 rounded-sm p-4' key={blog.id}>
            <img
              src={blog.image}
              alt={blog.title}
             
            />

            <h2>{blog.title}</h2>
            <p>Category: {blog.category}</p>
            <p>{blog.description}</p>
            <p>Author: {blog.author}</p>
            <p>Publish Date: {blog.publishDate}</p>

          <div className="flex gap-2">
              <Edit2 onClick={()=>editBlog(blog.id,blog)} className='text-blue-400' />
            <Trash2 className='text-red-400' onClick={() => deleteBlog(blog.id)}/>
          </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
