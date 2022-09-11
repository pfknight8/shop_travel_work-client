import LocalFareCard from '../Components/LocalFareCard'
import ItemCard from '../Components/ItemCard'

const LocationDetails = ({ location }) => {
  return (
    <div>
      <p>The details page for locations</p>
      <section id="location-detail">
        <p>Place the main content of a detail here</p>
      </section>
      <section id="location-fare">
        <p>place the localfare cards here</p>
        {location?.localfares.map((fare, index) => (
          <LocalFareCard key={fare.id} localFare={fare} />
        ))}
      </section>
      <section id="location-item">
        <p>Place the local items here</p>
        {location?.localitems.map((item, index) => (
          <ItemCard key={item.id} localItem={item} />
        ))}
      </section>
    </div>
  )
}

export default LocationDetails