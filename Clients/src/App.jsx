import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams, } from "react-router-dom"
import locationPins from "../locations"
import HomePage from "./Pages/HomePage"
import Map from "./Pages/Map"
import WaveformPlayer from "./Components/WaveformPlayer"
import song1 from "./audio/song1.mp3"
import ImagePreviewComponent from "./Components/ImagePreviewComponent"
import LyricsContainer from "./Components/LyricsContainer"
import FIlmReel from "./Components/FIlmReel"
import BTSPhotos from "./Components/BTSPhotos"
import WrittenReflection from "./Components/WrittenReflection"
import ErrorPage from "./Pages/ErrorPage"
import VideoPlayer from "./components/VideoPlayer"

function ContentRouter () {
  const { id, contentType } = useParams();
  const location = locationPins.find((loc) => loc.id === Number(id));
  
  if (!location) {
    return <ErrorPage />
  }
  
  switch (contentType) {
    case "lyrics":
      return <LyricsContainer />
    case "audio": 
      return <WaveformPlayer audioUrl={location.songUrl} />
    case "film-reel":
      return <FIlmReel videoUrl={location.videoUrl} />
    case "bts-photos":
      return <BTSPhotos />
    case "reflection":
      return <WrittenReflection />
    case "video":
      return <VideoPlayer src={location.videoUrl} />
    case "voice-note":
      return <WaveformPlayer audioUrl={location.songUrl} />   // this is assuming voice notes are using waveformPlayer
    case "mixing-notes":
      return <ImagePreviewComponent />  // this is also assumed
    case "interview":
      return <VideoPlayer src={location.videoUrl} />   
    default:
      return <ErrorPage />;
  }

}

function App() {
  //Routing  for All pages
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path='/map' element={<Map />} />
        <Route path="/location/:id/:contentType" element={<ContentRouter />} />


                
 


        {/* creating and testing individual components down here */}
        {/* <Route path='/lyrics/:id' element={<LyricsContainer />} />
        <Route path='/waveform2' element={<WaveformPlayer audioUrl={song1} />} />
        <Route path='/filmreel' element={<FIlmReel />} />
        <Route path='/bts_photos' element={<BTSPhotos />} />
        <Route path='/reflection' element={<WrittenReflection />} />
        <Route path='/watch' element={<VideoPlayer />} /> */}
       {/* Error Page */}
       {/* <Route path='*' element={<ErrorPage/>} /> */}

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