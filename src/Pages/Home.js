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
    <div id="Home-div">
      <h1 id="Home-title">S . T . W</h1>
      <div id="welcome-div">
        <div id="inner-welcome">
          <h2>Welcome</h2>
          <p>This is a collection of our thoughts and tips as we travel the world as digital nomads.</p>
        </div>
        {/* <img src="https://static.wixstatic.com/media/d92776_88bde6db809543d5a08df157140d175f~mv2.jpg/v1/fill/w_1878,h_1030,al_c,q_85,enc_auto/d92776_88bde6db809543d5a08df157140d175f~mv2.jpg" alt="pexels-photo-1269805"/> */}
      </div>
      <div id="locations-div">
        {/* <LocationSearch searchKeys={searchKeys} setSearchKeys={setSearchKeys} /> */}
        <button className="main-btn" onClick={handleGetLocations}>Get Locations</button>
        {locations?.map((location, index) => (
          <LocationCard
            key={location.id}
            location={location}
            handleLocationSelect={() => handleLocationSelect(location)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home