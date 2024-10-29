import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Users from './Component/Users/Users.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';
import Posts from './Component/Posts/Posts.jsx';
import Details from './Component/PostDetails/Details.jsx';
import Eror from './Component/Eror/Eror.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement:<Eror></Eror>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
       path:"/user/:userId",
       loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
       element: <UserDetails></UserDetails>
      },

      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Details></Details>
      }

    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
