import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from './store/reducers/userSlice';
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

import BlogPostForm from './Components/BlogPostForm';
import { CheckLogin } from './Services/auth';

function App() {
  //
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   let resp = CheckLogin()
  //   if (!resp.code) {
  //     //
  //   } else if (resp.code === "token_not_valid") {
  //     alert("testing not signed in")
  //   }
  // }, [])

  // const LogOut = () => {
  //   localStorage.clear()
  //   dispatch(getUser(""))
  //   navigate('/')
  // }
  
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
