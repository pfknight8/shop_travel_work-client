import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
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
  //
  // const checkToken = async () => {
  //   const user = await CheckLogin()
  //   //write user state function here
  // }
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token && user) {
  //     checkToken()
  //   } else if (token && !user) {
  //     localStorage.clear()
  //   }
  // }, [])
  //
  return (
    <div className="App">
      <header className="App-header sticky-head">
        <HeaderNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/profile/:user_id" element={ <Profile /> } /> 
          <Route path="/locations/:location_id" element={ <LocationDetails /> } />
          <Route path="/locations/posts/:post_id" element={ <BlogPostDetails /> } />
          <Route path="/localfare/:fare_id" element={ <LocalFareDetails /> } />
          <Route path="/localitem/:item_id" element={ <ItemDetails /> } />
          <Route path="/testpath" element={ <BlogPostForm /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
