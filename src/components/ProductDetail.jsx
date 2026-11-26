
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [productData, setProductData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchProductDetail = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const finalResponse = await res.json()
      setProductData(finalResponse)
    } catch (error) {
      console.log("Error fetching product:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductDetail()
  }, [id])

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>
  }

  if (!productData || productData.message) {
    return <h2 className="text-center mt-5">Product not found!</h2>
  }

  const discountPrice = (
    productData.price -
    (productData.price * productData.discountPercentage) / 100
  ).toFixed(2)

  return (
    <div className="container py-5">

      {/* Product Details */}
      <div className="row g-5">

        {/* Product Image */}
        <div className="col-md-6">
          <div className="bg-light rounded p-4 text-center">
            <img
              src={productData.images?.[0]}
              alt={productData.title}
              className="img-fluid"
              style={{
                maxHeight: "450px",
                objectFit: "contain"
              }}
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="col-md-6">

          <span className="badge bg-success mb-3">
            {productData.category}
          </span>

          <h1 className="fw-bold mb-3">
            {productData.title}
          </h1>

          <p className="text-muted">
            {productData.description}
          </p>

          <div className="mb-3">
            <span className="text-warning fs-5">★</span>
            <strong>{productData.rating}</strong>
            <span className="text-muted ms-2">
              ({productData.reviews?.length} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <h2 className="text-danger fw-bold d-inline">
              ${discountPrice}
            </h2>

            <del className="text-muted ms-3 fs-5">
              ${productData.price}
            </del>

            <span className="badge bg-danger ms-3">
              {productData.discountPercentage}% OFF
            </span>
          </div>

          <hr />

          {/* Stock */}
          <p>
            <strong>Availability:</strong>{" "}
            <span className="text-success">
              {productData.availabilityStatus}
            </span>
          </p>

          <p>
            <strong>Brand:</strong> {productData.brand}
          </p>

          <p>
            <strong>SKU:</strong> {productData.sku}
          </p>

          <p>
            <strong>Shipping:</strong> {productData.shippingInformation}
          </p>

          <p>
            <strong>Warranty:</strong> {productData.warrantyInformation}
          </p>

          <p>
            <strong>Return Policy:</strong> {productData.returnPolicy}
          </p>

          <p>
            <strong>Minimum Order:</strong>{" "}
            {productData.minimumOrderQuantity}
          </p>

          <hr />

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="btn btn-dark btn-lg">
              Add to Cart
            </button>

            <button className="btn btn-outline-danger btn-lg">
              ♥ Wishlist
            </button>
          </div>

        </div>
      </div>

      {/* Product Reviews */}
      <div className="mt-5">
        <h3 className="fw-bold mb-4">Customer Reviews</h3>

        <div className="row g-3">
          {productData.reviews?.map((review, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">

                  <h5>{review.reviewerName}</h5>

                  <p className="text-warning mb-2">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>

                  <p>{review.comment}</p>

                  <small className="text-muted">
                    {new Date(review.date).toLocaleDateString()}
                  </small>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProductDetail
