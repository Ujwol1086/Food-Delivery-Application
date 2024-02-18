import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Pages/Auth/Login';
import Create from './Pages/Auth/Create';
import Resturant from './Components/Resturant';
import ContactUs from './Components/ContactUs';
import MainLayout from './layout/MainLayout';

function App()
{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/resturant",
          element: <Resturant />
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        }
      ]
    },
    {
      path: "/auth",
      children: [
        {
          path: "login",
          element: <Login />
        },
        {
          path: "create",
          element: <Create />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
