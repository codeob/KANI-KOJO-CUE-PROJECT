import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Map from "./Pages/Map"


function App() {
  //Routing  for All pages
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route index element={<HomePage/>} />
       <Route path='/map' element={<Map/>} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App