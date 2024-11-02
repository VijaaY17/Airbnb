// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';

// Import your page components
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AccountPage from './components/AccountPage';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout component
    children: [
      {
        path: 'login', // Home route or landing page
        element: <LoginPage /> // Main component to render at the root path
      },
      {
        path: 'register',
        element: <RegisterPage /> // Component to render for the /register route
      },
      
      {
        path: 'account',
        element: <AccountPage/>
      },
      {
        path: 'account/:subpage',
        element: <AccountPage/>
      },
      {
        path:'account/:subpage/:action',
        element: <AccountPage/>
      }
    ]
  }
]);

// Render the application
const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

