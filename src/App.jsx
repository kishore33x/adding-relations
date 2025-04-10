import './app.css';

const destinations = [
  {
    name: "Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    hotels: ["Hotel Lutetia", "Le Bristol", "Hotel Le Meurice"]
  },
  {
    name: "Tokyo",
    img: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=400&q=80",
    hotels: ["Shinjuku Granbell", "Park Hyatt", "Hotel Gracery"]
  },
  {
    name: "New York",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLYh7jRBjiM2rx4frVlb3-1lu5BIzRx8wCA&s",
    hotels: ["The Plaza", "Four Seasons", "The Ritz-Carlton"]
  }
];

function App() {
  return (
    <div>
      <h1>Top Travel Destinations</h1>
      <div className="destination-container">
        {destinations.map((place, index) => (
          <div className="destination-card" key={index}>
            <img src={place.img} alt={place.name} className="destination-img" />
            <h2>{place.name}</h2>
            <ul className="hotel-list">
              {place.hotels.map((hotel, i) => (
                <li key={i}>{hotel}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
