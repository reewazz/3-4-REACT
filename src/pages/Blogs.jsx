
import { Edit2, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      title: 'The Future of Web Development',
      category: 'Technology',
      description: 'Explore the latest trends and technologies shaping the future of web development.',
      author: 'John Doe',
      publishDate: '2026-01-15'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      title: 'Working Remotely',
      category: 'Lifestyle',
      description: 'Discover practical tips to improve productivity.',
      author: 'Jane Smith',
      publishDate: '2026-02-10'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      title: 'Understanding AI',
      category: 'Technology',
      description: 'An introduction to artificial intelligence.',
      author: 'Alex Johnson',
      publishDate: '2026-03-05'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      title: 'Essential Developer Skills',
      category: 'Programming',
      description: 'Learn essential skills for becoming a developer.',
      author: 'Michael Brown',
      publishDate: '2026-04-12'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      title: 'Digital Marketing Strategies',
      category: 'Marketing',
      description: 'Explore effective digital marketing strategies.',
      author: 'Sarah Wilson',
      publishDate: '2026-05-20'
    }
  ])


    const userValue = {
        name : "amosh",
        address : "balaju"
    }
localStorage.setItem("name","riwaj")
localStorage.setItem("address","lagankhel")
localStorage.setItem("user",JSON.stringify(userValue))

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
        {blogs.map((blog) => (
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
