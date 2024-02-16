import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Pages/Auth/Login';
import Create from './Pages/Auth/Create';
import Resturant from './Components/Resturant';
import ContactUs from './Components/ContactUs';

function App()
{
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/create",
      element: <Create />
    },
    {
      path: "/resturant",
      element: <Resturant />
    },
    {
      path: "/contact-us",
      element: <ContactUs />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
