import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
import { githubInfoLoader } from './components/Github/GithubData'

// const router = createBrowserRouter([
//   {
//   path :'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'',
//       element:<Home/>
//     },{
//       path:'about',
//       element:<About/>
//     },
//     {
//       path:'contact_us',
//       element:<Contact/>
//     }
//   ]
// }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact_us' element={<Contact/>}
  loader={githubInfoLoader}
/>
<Route path='user/:userId' element={<User/>}
  loader={githubInfoLoader}
/>
<Route 
loader={githubInfoLoader}
path='github' 
element={<Github/>}/>
</Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
