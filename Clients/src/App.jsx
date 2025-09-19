import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams, } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Map from "./Pages/Map"
import WaveformPlayer from "./components/WaveformPlayer"
import song1 from "./audio/song1.mp3"
import ImagePreviewComponent from "./components/ImagePreviewComponent"
import locationPins from "../locations"
import LyricsContainer from "./components/LyricsContainer"
import FIlmReel from "./components/FIlmReel"
import BTSPhotos from "./components/BTSPhotos"
import WrittenReflection from "./components/WrittenReflection"
import wed from "./video/You_Are_Film_Reel.mp4"
import VideoPlayer from "./components/VideoPlayer"

function App() {
  const { id, contentType } = useParams();
  const location = locationPins.find((loc) => loc.id === Number(id));

  if (!location) {
    return 
  }
  
  //Routing  for All pages
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route index element={<HomePage/>} />
       <Route path='/map' element={<Map/>} />





       {/* creating and testing individual components down here */}
        <Route path='/lyrics/:id' element={<LyricsContainer />}/>
        <Route path='/waveform2' element={<WaveformPlayer audioUrl={song1} />}/>       
        <Route path='/filmreel' element={<FIlmReel videoUrl={wed} />}/>       
        <Route path='/bts_photos' element={<BTSPhotos />}/>       
        <Route path='/reflection' element={<WrittenReflection />}/>    
                <Route path='/preview' element={<ImagePreviewComponent />}/>
                                <Route path='/watch' element={<VideoPlayer />}/>
              <Route path='*' element={<NotF />}/>



                
 



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