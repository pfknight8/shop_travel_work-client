import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getObj } from '../store/reducers/localObjSlice'
import BlogPostCard from '../Components/BlogPostCard'
import BlogPostForm from '../Components/BlogPostForm'
import LocalFareCard from '../Components/LocalFareCard'
import LocalFareForm from '../Components/LocalFareForm'
import ItemCard from '../Components/ItemCard'
import ItemForm from '../Components/ItemForm'
import Client from '../Services/api'

const LocationDetails = () => {
  const location = useSelector(state => state.locations.location)
  const user = useSelector(state => state.user.user)
  const [localBlogPosts, setLocalBlogPosts] = useState([])
  const [localFares, setLocalFares] = useState([])
  const [localItems, setLocalItems] = useState([])
  const [postBtn, togglePostBtn] = useState(false)
  const [fareBtn, toggleFareBtn] = useState(false)
  const [itemBtn, toggleItemBtn] = useState(false)
  const [postFormBtn, togglePostFormBtn] = useState(false)
  const [fareFormBtn, toggleFareFormBtn] = useState(false)
  const [itemFormBtn, toggleItemFormBtn] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLocalFares = async (location) => {
    setLocalFares([])
    try{
      let res = await Client.get(`/localfare/view?id=${location.id}`)
      setLocalFares(res.data)
    } catch (error) {
      throw error
    }
  }
  const handleLocalItems = async (location) => {
    setLocalItems([])
    try{
      let res = await Client.get(`/localitem/view?id=${location.id}`)
      setLocalItems(res.data)
    } catch (error) {
      throw error
    }
  }
  const handleLocalPosts = async (location) => {
    setLocalBlogPosts([])
    try{
      let res = await Client.get(`/locations/post/view?id=${location.id}`)
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
      <section id="location-detail">
        <p className='title-name'>{location.name}</p>
        <p>Country: {location.country}</p>
        <p>State/Province: {location.state_province}</p>
        <p>City: {location.city}</p>
      </section>
      <section id="location-posts">
        <div className='card-title'>
          <button className="toggle-btn" onClick={() => {togglePostBtn(!postBtn); togglePostFormBtn(false)}}>{postBtn ? 'v' : '>'}</button>
          <p className='title-name'>Posts</p>
          {(postBtn && user.id) ? (<button className='add-something' onClick={() => togglePostFormBtn(!postFormBtn)}>{postFormBtn ? 'Cancel' : 'Add Post'}</button>) : null}
        </div>
        <div className='form-holder'>
          {postFormBtn && <BlogPostForm blogPost={{}}/>}
        </div>
        {postBtn && localBlogPosts?.map((blogPost, index) => (
          <BlogPostCard key={blogPost.id} blogPost={blogPost} handleSelection={() => handleSelection('locations/posts', blogPost)} />
        ))}
      </section>
      <section id="location-fare">
        <div className='card-title'>
          <button className="toggle-btn" onClick={() => {toggleFareBtn(!fareBtn); toggleFareFormBtn(false)}}>{fareBtn ? 'v' : '>'}</button>
          <p className='title-name'>Local Fares</p>
          {(fareBtn && user.id) ? (<button className='add-something' onClick={() => toggleFareFormBtn(!fareFormBtn)}>{fareFormBtn ? 'Cancel' : 'Add Local Fare'}</button>) : null}
        </div>
        <div className='form-holder'>
          {fareFormBtn && <LocalFareForm localFare={{}}/>}
        </div>
        {fareBtn && localFares?.map((fare, index) => (
          <LocalFareCard key={fare.id} localFare={fare} handleSelection={() => handleSelection('localfare', fare)}/>
        ))}
      </section>
      <section id="location-item">
        <div className='card-title'>
          <button className="toggle-btn" onClick={() => {toggleItemBtn(!itemBtn); toggleItemFormBtn(false);}}>{itemBtn ? 'v' : '>'}</button>
          <p className='title-name'>Items Procured Locally</p>
          {(itemBtn && user.id) ? (<button className='add-something' onClick={() => toggleItemFormBtn(!itemFormBtn)}>{itemFormBtn ? 'Cancel' : 'Add Local Item'}</button>) : null}
        </div>
        <div className='form-holder'>
          {itemFormBtn && <ItemForm localItem={{}} />}
        </div>
        {itemBtn && localItems?.map((item, index) => (
          <ItemCard key={item.id} localItem={item} handleSelection={() => handleSelection('localitem', item)}/>
        ))}
      </section>
    </div>
  )
}

export default LocationDetails