import { useEffect, useState } from 'react'
import LocalFareCard from '../Components/LocalFareCard'
import ItemCard from '../Components/ItemCard'
import Client from '../Services/api'

const LocationDetails = ({ location }) => {
  const [localBlogPosts, setLocalBlogPosts] = useState({})
  const [localFares, setLocalFares] = useState({})
  const [localItems, setLocalItems] = useState({})

  const handleLocalFares = async (location) => {
    let locationId = location.id
    let localfares = await Client.get(`/api/localfare/${locationId}`)
  }

  useEffect(() => {
    //
    handleLocalFares()
  }, [])

  return (
    <div>
      <p>The details page for locations</p>
      <section id="location-detail">
        <p>Place the main content of a detail here</p>
      </section>
      <section id="location-posts">
        <p>place the localfare cards here</p>
        {localBlogPosts?.map((fare, index) => (
          <LocalFareCard key={fare.id} localFare={fare} />
        ))}
      </section>
      <section id="location-fare">
        <p>place the localfare cards here</p>
        {localFares?.map((fare, index) => (
          <LocalFareCard key={fare.id} localFare={fare} />
        ))}
      </section>
      <section id="location-item">
        <p>Place the local items here</p>
        {localItems?.map((item, index) => (
          <ItemCard key={item.id} localItem={item} />
        ))}
      </section>
    </div>
  )
}

export default LocationDetails