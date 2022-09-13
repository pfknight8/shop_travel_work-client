import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LocalFareCard from '../Components/LocalFareCard'
import ItemCard from '../Components/ItemCard'
import BlogPostCard from '../Components/BlogPostCard'
import Client from '../Services/api'

const LocationDetails = () => {
  const location = useSelector(state => state.locations.location)
  const [localBlogPosts, setLocalBlogPosts] = useState([])
  const [localFares, setLocalFares] = useState([])
  const [localItems, setLocalItems] = useState([])

  const handleLocalFares = async (location) => {
    let localfaresArr = location.localfares
    try{
      let res = await Client.get(`/api/localfare?${localfaresArr.map((n) => `id=${n}`).join('&')}`)
      setLocalFares(res.data)
    } catch (error) {
      throw error
    }
  }
  const handleLocalItems = async (location) => {
    let localitemsArr = location.localitems
    try{
      let res = await Client.get(`/api/localitems?${localitemsArr.map((n) => `id=${n}`).join('&')}`)
      setLocalItems(res.data)
    } catch (error) {
      throw error
    }
  }
  const handleLocalPosts = async (location) => {
    let locationPostsArr = location.locationposts
    try{
      let res = await Client.get(`/api/locations/posts?${locationPostsArr.map((n) => `id=${n}`).join('&')}`)
      console.log(res.data)
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

  return (
    <div>
      <p>The details page for locations</p>
      <section id="location-detail">
        <p>Place the main content of a detail here</p>
      </section>
      <section id="location-posts">
        <p>place the localpost cards here</p>
        {localBlogPosts?.map((blogPost, index) => (
          <BlogPostCard key={blogPost.id} blogPost={blogPost} />
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