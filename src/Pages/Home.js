import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getLocation } from "../store/reducers/locationSlice"
import LocationSearch from "../Components/LocationSearch"
import LocationCard from "../Components/LocationCard"
import Client from "../Services/api"
import '../Styles/Home.css'

const Home = (props) => {
  const [searchKeys, setSearchKeys] = useState({})
  const [locations, setLocations] = useState([])
  // let locations = [{id: 55, name: 'Mo-town', country: 'Mongolia', state_province: 'None', city: 'Xia'}]
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGetLocations = async (e) => {
    e.preventDefault()
    let res = await Client.get('/api/locations')
    setLocations(res.data)
  }

  const handleLocationSelect = (location) => {
    dispatch(getLocation(location))
    navigate(`/locations/${location.id}`)
  }

  return (
    <div>
      <h1>Shop - Travel - Work</h1>
      {/* <LocationSearch searchKeys={searchKeys} setSearchKeys={setSearchKeys} /> */}
      <button onClick={handleGetLocations}>Get Locations</button>
      {locations?.map((location, index) => (
        <LocationCard
          key={location.id}
          location={location}
          handleLocationSelect={() => handleLocationSelect(location)}
        />
      ))}
    </div>
  )
}

export default Home