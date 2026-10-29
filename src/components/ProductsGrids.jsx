import React, { useState } from "react";


function ProductCard({ product, onAddToCart }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl  hover:bg-black hover:text-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
        loading="lazy"
      />

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        <h2 className="mt-2 text-lg font-semibold sm:text-xl md:text-2xl">
          {product.name}
        </h2>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold  ">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-3 font-medium text-white transition hover:bg-indigo-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  const [showForm,setShowForm] = useState(false)
  const [products,setProducts] = useState([
  {
    id: 1,
    name: "Running Sneakers",
    category: "Footwear",
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Classic Wristwatch",
    category: "Accessories",
    price: 119.0,
    oldPrice: 149.0,
    rating: 4.6,
    reviews: 86,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 64.5,
    oldPrice: 89.0,
    rating: 4.9,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Daily Face Cream",
    category: "Skincare",
    price: 24.99,
    oldPrice: 32.99,
    rating: 4.7,
    reviews: 97,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
  },
]
)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  
  const [editingIndex, setEditingIndex] = useState(null);

  const addProduct= () => {
    if (editingIndex != null) {
      const updatedProduct = todos.map((item, index) =>
        index === editingIndex ? { ...item, text: task } : item,
      );
      setTodos(updatedTodo);
      setEditingIndex(null)
      
    } else {
      const newProduct = {
        id : Date.now(),
        name: name,
    category: category,
    price:  Number(price),
    oldPrice: 100,
    rating: 5,
    reviews: 100,
    image:image
      };


      const updatedProduct = [...products, newProduct];
      setProducts(updatedProduct);
    }
      setName("");
      setPrice("");
      setCategory("");
      setImage("");
      setShowForm(false)
    
  };
  // const deleteTodo = (indexToDelete) => {
  //   const updatedtodo = todos.filter((item, index) => index !== indexToDelete);
  //   setTodos(updatedtodo);
  // };


  console.log(products)


  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
      <div className="flex justify-between items-center">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Our Products
        </h1>
        <button onClick={()=>setShowForm(true)} className="bg-blue-400 px-4 py-1 font-semibold text-white rounded-sm">Add Product</button>
      </div>
   
      

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

            {showForm &&      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Add New Product
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter the details below to add a product.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 p-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
             value={name}
             onChange={(e)=>setName(e.target.value)}
              placeholder="Enter product name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
                value={price}
             onChange={(e)=>setPrice(e.target.value)}
              placeholder="Enter product price"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
                  value={category}
             onChange={(e)=>setCategory(e.target.value)}
             
              placeholder="Enter product category"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="url"
                value={image}
             onChange={(e)=>setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
            <button
              type="button"
              onClick={()=>setShowForm(false)}
              className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={addProduct}
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>  }
    </section>
  );
}