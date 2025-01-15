import React from 'react'
import './Gallery.css'

const Gallery = () => {
  const images = [
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1724128475567x249634025028918180%2Fclassicu%25202024-08-19%2520213332.307.jpg",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1724131231837x536047286551670500%2FIMG_1642%25202.jpg",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1724131241119x349006443912393200%2FIMG_8120.jpg",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1724131250108x965510529585569700%2Fclassicu%25202024-08-19%2520220520.199.jpg",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1724128487889x104374922982541700%2Fclassicu%25202024-08-19%2520212941.194.jpg"
  ]

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  )
}

export default Gallery 