import { useState } from "react"
import { useSelector } from "react-redux"

const LocalFareDetails = () => {
  const localFare = useSelector(state => state.localObj.localObj)
  const [fareEditBtn, toggleFareEditmBtn] = useState(false)

  return (
    <div>
      <h2>{localFare.name}</h2>
      <h4>{localFare.category}</h4>
      <p>{localFare.description}</p>
      <p>Posted by: {localFare.user}</p>
    </div>
  )
}

export default LocalFareDetails