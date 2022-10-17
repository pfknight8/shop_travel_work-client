const LocationCard = ({location, handleLocationSelect}) => {
  return (
    <div className="location-card">
      <h2>{location.name}</h2>
      <img className="location-image" src={location?.image} aria-label="location image"/>
      <h3>{location.city}, {location.country}</h3>
      <button onClick={handleLocationSelect}>Details</button>
    </div>
  )
}

export default LocationCard