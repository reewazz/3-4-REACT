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
  {
  id: 5,
  name: "Leather Casual Shoes",
  category: "Footwear",
  price: 89.99,
  oldPrice: 109.99,
  rating: 4.5,
  reviews: 76,
  image:
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
},
{
  id: 6,
  name: "Sport Running Shoes",
  category: "Footwear",
  price: 69.99,
  oldPrice: 89.99,
  rating: 4.7,
  reviews: 143,
  image:
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
},
{
  id: 7,
  name: "Leather Handbag",
  category: "Accessories",
  price: 89.00,
  oldPrice: 119.00,
  rating: 4.8,
  reviews: 112,
  image:
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
},
{
  id: 8,
  name: "Stylish Sunglasses",
  category: "Accessories",
  price: 34.99,
  oldPrice: 49.99,
  rating: 4.4,
  reviews: 65,
  image:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
},
{
  id: 9,
  name: "Bluetooth Speaker",
  category: "Electronics",
  price: 49.99,
  oldPrice: 69.99,
  rating: 4.6,
  reviews: 189,
  image:
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
},
{
  id: 10,
  name: "Wireless Earbuds",
  category: "Electronics",
  price: 39.99,
  oldPrice: 59.99,
  rating: 4.7,
  reviews: 156,
  image:
    "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
},
{
  id: 11,
  name: "Hydrating Face Serum",
  category: "Skincare",
  price: 19.99,
  oldPrice: 27.99,
  rating: 4.8,
  reviews: 134,
  image:
    "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
},
{
  id: 12,
  name: "Vitamin C Face Wash",
  category: "Skincare",
  price: 14.99,
  oldPrice: 19.99,
  rating: 4.5,
  reviews: 91,
  image:
    "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=80",
},
{
  id: 13,
  name: "Cotton Casual T-Shirt",
  category: "Clothing",
  price: 19.99,
  oldPrice: 29.99,
  rating: 4.6,
  reviews: 178,
  image:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
},
{
  id: 14,
  name: "Classic Denim Jacket",
  category: "Clothing",
  price: 59.99,
  oldPrice: 79.99,
  rating: 4.7,
  reviews: 102,
  image:
    "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80",
},
{
  id: 15,
  name: "Modern Table Lamp",
  category: "Home Decor",
  price: 39.99,
  oldPrice: 54.99,
  rating: 4.5,
  reviews: 83,
  image:
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
},
{
  id: 16,
  name: "Decorative Flower Vase",
  category: "Home Decor",
  price: 24.99,
  oldPrice: 34.99,
  rating: 4.6,
  reviews: 72,
  image:
    "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80",
},
{
  id: 17,
  name: "Travel Backpack",
  category: "Bags",
  price: 44.99,
  oldPrice: 59.99,
  rating: 4.7,
  reviews: 145,
  image:
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
},
{
  id: 18,
  name: "Elegant Shoulder Bag",
  category: "Bags",
  price: 54.99,
  oldPrice: 74.99,
  rating: 4.8,
  reviews: 119,
  image:
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
},
{
  id: 19,
  name: "Ceramic Coffee Mug",
  category: "Kitchen",
  price: 12.99,
  oldPrice: 17.99,
  rating: 4.5,
  reviews: 64,
  image:
    "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80",
},
{
  id: 20,
  name: "Insulated Water Bottle",
  category: "Kitchen",
  price: 18.99,
  oldPrice: 24.99,
  rating: 4.7,
  reviews: 98,
  image:
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
},
]
)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  

  const categories = products.map((item)=>item.category)
  const unique = ["All",...new Set(categories)]

  console.log(unique,"cat")

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

 

  
  
  
  const [selectedCategory,setSelectedCategory] = useState("All")

  const filteredProducts = selectedCategory ==="All" ?products : products.filter((item,index)=>item.category===selectedCategory)

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
      <div className="flex justify-between items-center">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Our Products
        </h1>
        <button onClick={()=>setShowForm(true)} className="bg-blue-400 px-4 py-1 font-semibold text-white rounded-sm">Add Product</button>
      </div>

      <div className="py-4 flex gap-4">
       

        {unique.map((item,index)=>(
          <button onClick={()=>setSelectedCategory(item)}  className={`${item===selectedCategory ? "bg-black" : "bg-blue-400"}    px-4 py-1 font-semibold text-white rounded-sm`} >{item}</button>
        ))}

      </div>
   
      

        <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
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