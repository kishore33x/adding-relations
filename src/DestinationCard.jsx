function DestinationCard({ data }) {
    const { name, location, image, description, price } = data;
  
    return (
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-content">
          <h3>{name}</h3>
          <p><strong>Location:</strong> {location}</p>
          <p>{description}</p>
          <p><strong>Price:</strong> {price}</p>
        </div>
      </div>
    );
  }
  
  export default DestinationCard;
  