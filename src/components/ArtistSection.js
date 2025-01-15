import React from 'react'
import './ArtistSection.css'

const ArtistSection = () => {
  const artists = [
    {
      name: "Juice Bruns",
      image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1718903264661x274094818560884900%2FGroup%25203.png"
    },
    {
      name: "Alex Mack",
      image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1718905347145x232249156718697280%2FGroup.png"
    },
    {
      name: "Post Wook",
      image: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa0fdd7266e1c9f1a269b675c3038f885.cdn.bubble.io%2Ff1718905317084x968075061085897500%2FGroup%25202.png"
    }
  ]

  return (
    <div className="artist-section">
      <h3 className="section-title">Season 1</h3>
      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div key={index} className="artist-card">
            <img src={artist.image} alt={artist.name} />
            <h5>{artist.name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtistSection 