//
const LocalFareCard = ({localFare}) => {
  return (
    <div className="fare-card">
      <h3>{localFare.name}</h3>
      <h4>{localFare.establishment}</h4>
    </div>
  )
}

export default LocalFareCard