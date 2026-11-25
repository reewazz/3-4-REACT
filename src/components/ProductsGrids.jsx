import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl  hover:bg-black hover:text-white">
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-56 w-full object-cover"
        loading="lazy"
      />

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        <h2 className="mt-2 text-lg font-semibold sm:text-xl md:text-2xl">
          {product.title}
        </h2>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm text-gray-500">
         
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold  ">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.oldPrice}
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

  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);


   const myName = localStorage.removeItem("name")
   const user = JSON.parse(localStorage.getItem("user"))



   const fetchProducts = async ()=> {
        const res =  await fetch("https://dummyjson.com/products")
        const finalResponse = await res.json()
        setProducts(finalResponse.products)
        console.log("api is calling")
      }


      useEffect(()=> {
        fetchProducts()
      },[])

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const categories = products.map((item) => item.category);
  const unique = ["All", ...new Set(categories)];

  console.log(unique, "cat");

  const [editingIndex, setEditingIndex] = useState(null);

  const prices = products.map((item, index) => item.price);
  console.log(prices, "pppppp");


  const numbers = [1,2,3,4,5]

  localStorage.removeItem("name")
  const [opened, { open, close }] = useDisclosure(false)


  const totalPrice = numbers.reduce((total, item) => {
    total = total + item;
    return total
  }, 0);

  console.log(totalPrice)

  const addProduct = () => {
    if (editingIndex != null) {
      const updatedProduct = todos.map((item, index) =>
        index === editingIndex ? { ...item, text: task } : item,
      );
      setTodos(updatedTodo);
      setEditingIndex(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name: name,
        category: category,
        price: Number(price),
        oldPrice: 100,
        rating: 5,
        reviews: 100,
        image: image,
      };

      const updatedProduct = [...products, newProduct];
      setProducts(updatedProduct);
    }
    setName("");
    setPrice("");
    setCategory("");
    setImage("");
    setShowForm(false);
  };
  // const deleteTodo = (indexToDelete) => {
  //   const updatedtodo = todos.filter((item, index) => index !== indexToDelete);
  //   setTodos(updatedtodo);
  // };

  console.log(products);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item, index) => item.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
       Products
          </h1>
          <button
            onClick={open}
            className="bg-blue-400 px-4 py-1 font-semibold text-white rounded-sm"
          >
            Add Product
          </button>
        </div>

        <div className="py-4 flex gap-4">
          {unique.map((item, index) => (
            <button
              onClick={() => setSelectedCategory(item)}
              className={`${item === selectedCategory ? "bg-black" : "bg-blue-400"}    px-4 py-1 font-semibold text-white rounded-sm`}
            >
              {item}
            </button>
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
 <Modal opened={opened} onClose={close} size={"80%"} >
         <div className="  flex items-center justify-center p-4">
          <div className="w-full ">
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setPrice(e.target.value)}
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
                  onChange={(e) => setCategory(e.target.value)}
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
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
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
        </div>
      </Modal>
     
     
     
    </section>
  );
}
