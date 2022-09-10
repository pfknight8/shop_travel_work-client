import { connect } from "react-redux"

const LocationCard = (props) => {
  return (
    <div>
      <p>Location</p>
      <h2>{props.name}</h2>
    </div>
  )
}

export default LocationCard