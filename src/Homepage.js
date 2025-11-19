import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './logo.svg'; // Placeholder kép

function Homepage() {
  const specials = [
    {
      id: 1,
      name: 'Greek salad',
      price: '$12.99',
      image: 'https://via.placeholder.com/300x200?text=Greek+Salad',
      description: 'The famous greek salad of crispy cucumber, tomatoes, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
      id: 2,
      name: 'Bruchetta',
      price: '$ 5.99',
      image: 'https://via.placeholder.com/300x200?text=Bruchetta',
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$ 5.00',
      image: 'https://via.placeholder.com/300x200?text=Lemon+Dessert',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <Link to="/booking" className="btn-primary">Reserve a Table</Link>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Előétel tál" />
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials-section">
        <div className="container">
          <div className="specials-header">
            <h2>This Weeks Specials!</h2>
            <Link to="/order" className="btn-primary">Online Menu</Link>
          </div>

          <div className="specials-grid">
            {specials.map((special) => (
              <div key={special.id} className="special-card">
                <img src={special.image} alt={special.name} className="special-image" />
                <div className="special-content">
                  <div className="special-header">
                    <h3>{special.name}</h3>
                    <p className="price">{special.price}</p>
                  </div>
                  <p className="description">{special.description}</p>
                  <button className="btn-delivery">Order a delivery 🛵</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;