import { useState } from "react"
import LocationSearch from "../Components/LocationSearch"
import LocationCard from "../Components/LocationCard"

const Home = (props) => {
  const [searchKeys, setSearchKeys] = useState({})
  let locations = [{id: 55, name: 'Mo-town', country: 'Mongolia', state_province: 'None', city: 'Xia'}]

  return (
    <div>
      <h1>Shop - Travel - Work</h1>
      <LocationSearch searchKeys={searchKeys} setSearchKeys={setSearchKeys} />
      {locations?.map((location, index) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  )
}

export default Home