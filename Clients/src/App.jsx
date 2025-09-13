import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Map from "./Pages/Map"
import WaveformPlayer from "./components/WaveformPlayer"
import song1 from "./audio/song1.mp3"
import ImagePreviewComponent from "./components/ImagePreviewComponent"
import locationPins from "../locations"
import LyricsContainer from "./components/LyricsContainer"

function App() {

  console.log(locationPins);
  
  //Routing  for All pages
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route index element={<HomePage/>} />
       <Route path='/map' element={<Map/>} />





       {/* creating and testing individual components down here */}
       <Route path='/lyrics/:id' element={<LyricsContainer />}/>
        {/* <Route path='/waveform2' element={<WaveformPlayer audioUrl={song1} />}/>        */}
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