import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getObj } from '../store/reducers/localObjSlice'
import LocalFareCard from '../Components/LocalFareCard'
import ItemCard from '../Components/ItemCard'
import BlogPostCard from '../Components/BlogPostCard'
import Client from '../Services/api'

const LocationDetails = () => {
  const location = useSelector(state => state.locations.location)
  const [localBlogPosts, setLocalBlogPosts] = useState([])
  const [localFares, setLocalFares] = useState([])
  const [localItems, setLocalItems] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLocalFares = async (location) => {
    setLocalFares([])
    try{
      let res = await Client.get(`/api/localfare?id=${location.id}`)
      setLocalFares(res.data)
    } catch (error) {
      throw error
    }
  }
  const handleLocalItems = async (location) => {
    setLocalItems([])
    try{
      let res = await Client.get(`/api/localitem?id=${location.id}`)
      setLocalItems(res.data)
    } catch (error) {
      throw error
    }
  }
  const handleLocalPosts = async (location) => {
    setLocalBlogPosts([])
    try{
      let res = await Client.get(`/api/locations/posts?id=${location.id}`)
      setLocalBlogPosts(res.data)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    handleLocalFares(location)
    handleLocalItems(location)
    handleLocalPosts(location)
  }, [])

  const handleSelection = (urlText, obj) => {
    dispatch(getObj(obj))
    navigate(`/${urlText}/${obj.id}`)
  }

  return (
    <div>
      <p>The details page for locations</p>
      <section id="location-detail">
        <p>Place the main content of a detail here</p>
      </section>
      <section id="location-posts">
        <p>place the localpost cards here</p>
        {localBlogPosts?.map((blogPost, index) => (
          <BlogPostCard key={blogPost.id} blogPost={blogPost} handleSelection={() => handleSelection('locations/posts', blogPost)} />
        ))}
      </section>
      <section id="location-fare">
        <p>place the localfare cards here</p>
        {localFares?.map((fare, index) => (
          <LocalFareCard key={fare.id} localFare={fare} handleSelection={() => handleSelection('localfare', fare)}/>
        ))}
      </section>
      <section id="location-item">
        <p>Place the local items here</p>
        {localItems?.map((item, index) => (
          <ItemCard key={item.id} localItem={item} handleSelection={() => handleSelection('localitem', item)}/>
        ))}
      </section>
    </div>
  )
}

export default LocationDetails