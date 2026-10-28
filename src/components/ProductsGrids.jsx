import React from "react";

const products = [
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
];

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
          <span className="text-xl font-bold text-gray-900">
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

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Our Products
        </h1>
   
      

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
    </section>
  );
}