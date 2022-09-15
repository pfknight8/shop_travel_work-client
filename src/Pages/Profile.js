import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const Profile = () => {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    //
  }, [])

  return (
    <div>
      <p>The details page for profiles</p>
      <h2>Your Location Posts</h2>
    </div>
  )
}

export default Profile