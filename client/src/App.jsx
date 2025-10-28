import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams, } from "react-router-dom"
import locationPins from "../locations"
import HomePage from "./Pages/HomePage"
import WelcomePage from "./Pages/WelcomePage"
import Map from "./Pages/Map"
import WaveformPlayer from "./components/WaveformPlayer"
import LyricsContainer from "./components/LyricsContainer"
import BTSPhotos from "./components/BTSPhotos"
import WrittenReflection from "./components/WrittenReflection"
import ErrorPage from "./Pages/ErrorPage"
import VideoPlayer from "./components/VideoPlayer"
import ImagePreviewComponent from "./components/ImagePreviewComponent"
import Lyricsbreakedown from "./components/Lyricsbreakedown"
import FilmReel from "./components/FilmReel.jsx"
import ComingSoon from "./Pages/ComingSoon.jsx"
import BgAudio from "./components/BgAudio.jsx"
import Slide from "./Pages/Slide.jsx"


function ContentRouter () {
  const { id, contentType } = useParams();
  const location = locationPins.find((loc) => loc.id === Number(id));  
  
  if (!location) {
    return <ErrorPage />;
  }

  switch (contentType) {
    case "lyrics":
      return <LyricsContainer />
    case "lyrics-breakdown":
      return <Lyricsbreakedown />
    case "audio": 
      return <WaveformPlayer audioUrl={location.songUrl} />
    case "film-reel":
      return <FilmReel videoUrl={location.videoUrl} />
    case "bts-photos":
      return <BTSPhotos />;
    case "reflection":
      return <WrittenReflection />;
    case "video":
      return <VideoPlayer src={location.videoUrl} />;
    case "voice-note":
      return <WaveformPlayer audioUrl={location.songUrl} /> 
    case "mixing-notes":
      return <ImagePreviewComponent /> 
    case "interview":
      return <VideoPlayer src={location.videoUrl} />   
    default:
      return <ErrorPage />
  }
}

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/location/:id/:contentType" element={<ContentRouter />} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/comingsoon" element={<ComingSoon/>} />
        <Route path="/bgaudio" element={<BgAudio/>} />
        <Route path='/slide' element={<Slide/>} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
