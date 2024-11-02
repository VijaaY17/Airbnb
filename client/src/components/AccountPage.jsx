
import { useContext } from "react";
import { UserContext } from '../UserContext';
import { Link, useNavigate, useParams } from "react-router-dom";
import PlacesPage from "./PlacesPage";

const AccountPage = () => {
  const {subpage} = useParams()
  console.log(subpage)
  const { user,setUser } = useContext(UserContext);

  const navigate = useNavigate()

  // Check if user is defined before accessing user.name
  if (!user) {
    return <div>Login</div>; // or a more appropriate message/component
  }

  function handlelogout () {
    setUser(null)
    navigate('/')

  }
 
 function LinkClasses (type='null') {
  let classes = ' inline-flex px-4 py-4 gap-2 '
  if(type===subpage || (subpage==undefined && type=='profile'))
  {
    classes+= 'bg-[#E41D56] text-white rounded-full'
  }
  return classes

 }

  return (
    <div>
      <nav className="flex justify-center mt-6 gap-4">
        <Link className={LinkClasses('profile')} to="/account">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
        My Profile
        </Link>

        <Link className={LinkClasses('bookings')} to="/account/bookings">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

        My Bookings
        </Link>
        <Link className={LinkClasses('places')} to="/account/places">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>

        My Accomodations</Link>
      
      </nav>
      
      {subpage==undefined && (
        <div className=" text-center  max-w-lg mx-auto mt-4">
          Logged in as {user.name} ({user.email})
          <br/>
          <button onClick={handlelogout}className="w-full bg-[#E41D56] text-white rounded-full mt-4 px-2 py-3">LogOut</button>
          </div>
      )}
      {subpage=='places' && (
        <div>
          <PlacesPage/>

          </div>
      )}
    </div>
  );
};

export default AccountPage;