import { Route, Routes } from 'react-router-dom'
import HeaderNav from './Components/HeaderNav';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp'
import BlogPostDetails from './Pages/BlogPostDetails'
import LocationDetails from './Pages/LocationDetails';
import LocalFareDetails from './Pages/LocalFareDetails';
import ItemDetails from './Pages/ItemDetails';
import './Styles/App.css';
import Client from './Services/api';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "./store/reducers/userSlice"

function App() {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const getUserData = async (loggedUser) => {
    let userDetail = await Client.get(`/users/${loggedUser}`)
    dispatch(getUser(userDetail.data))
  }
  useEffect(() => {
    const loggedUser = localStorage.getItem("userLoggedIn")
    if (loggedUser && !user.id) {
      getUserData(loggedUser)
    }
  }, [])
  
  return (
    <div id="App">
      <header className="App-header">
        <HeaderNav />
      </header>
      <main className='App-body'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/profile/:user_id" element={ <Profile /> } /> 
          <Route path="/locations/:location_id" element={ <LocationDetails /> } />
          <Route path="/locations/posts/:post_id" element={ <BlogPostDetails /> } />
          <Route path="/localfare/:fare_id" element={ <LocalFareDetails /> } />
          <Route path="/localitem/:item_id" element={ <ItemDetails /> } />
        </Routes>
      </main>
      <footer>
        <p>Get in Touch: contact us at info@shoptravelwork.com</p>
        <p>2022</p>
      </footer>
    </div>
  );
}

export default App;
