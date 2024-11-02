// import Header from "./components/Header"
// import RegisterPage from "./components/RegisterPage"
// import LoginPage from "./components/LoginPage"
// const App =  () =>{
//   return (
//     <div className="flex flex-col">
//       <Header/>
//       <LoginPage/>
//       <RegisterPage/>
      
    
//     </div>
//   )
// }
// export default App

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { UserContextProvider } from './UserContext';

const App = () => {
  return (
    <UserContextProvider>
    <div className="flex flex-col">
      <Header />
      <Outlet /> {/* This will render the child routes */}
    </div>
    </UserContextProvider>
  );
};

export default App;

