const LocationCard = ({location, handleLocationSelect}) => {
  return (
    <div className="location-card">
      <h2>{location.name}</h2>
      <h3>{location.city}, {location.country}</h3>
      <button onClick={handleLocationSelect}>Details</button>
    </div>
  )
}

export default LocationCard