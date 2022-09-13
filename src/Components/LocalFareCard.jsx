//
const LocalFareCard = ({localFare, handleSelection}) => {
  return (
    <div className="fare-card">
      <h3 onClick={handleSelection}>{localFare.name}</h3>
      <h4>{localFare.establishment}</h4>
    </div>
  )
}

export default LocalFareCard