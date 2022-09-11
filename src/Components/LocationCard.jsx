import { connect } from "react-redux"

const LocationCard = ({location}) => {
  return (
    <div className="location-card">
      <h2>{location.name}</h2>
      <h3>{location.city}, {location.country}</h3>
    </div>
  )
}

export default LocationCard