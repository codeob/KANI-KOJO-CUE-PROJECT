import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Map from "./Pages/Map"
import WaveformPlayer from "./Components/WaveformPlayer"
import song1 from "./audio/song1.mp3"
import ImagePreviewComponent from "./Components/ImagePreviewComponent"
import locationPins from "../locations"
import LyricsContainer from "./Components/LyricsContainer"
import FIlmReel from "./Components/FIlmReel"
import BTSPhotos from "./Components/BTSPhotos"
import WrittenReflection from "./Components/WrittenReflection"
import VideoPlayer from "./Components/VideoPlayer"
import ErrorPaeg from "./Pages/ErrorPaeg"

function App() {

  console.log(locationPins);

  //Routing  for All pages
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path='/map' element={<Map />} />





        {/* creating and testing individual components down here */}
        <Route path='/lyrics/:id' element={<LyricsContainer />} />
        <Route path='/waveform2' element={<WaveformPlayer audioUrl={song1} />} />
        <Route path='/filmreel' element={<FIlmReel />} />
        <Route path='/bts_photos' element={<BTSPhotos />} />
        <Route path='/reflection' element={<WrittenReflection />} />
        <Route path='/watch' element={<VideoPlayer />} />
       {/* Error Page */}
       <Route path='*' element={<ErrorPaeg/>} />
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