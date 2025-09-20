import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams, } from "react-router-dom"
import locationPins from "../locations"
import HomePage from "./Pages/HomePage"
import WelcomePage from "./Pages/WelcomePage"
import Map from "./Pages/Map"
import WaveformPlayer from "./Components/WaveformPlayer"
import ImagePreviewComponent from "./components/ImagePreviewComponent"
import LyricsContainer from "./Components/LyricsContainer"
import FilmReel from "./Components/FilmReel"
import BTSPhotos from "./Components/BTSPhotos"
import WrittenReflection from "./Components/WrittenReflection"
import ErrorPage from "./Pages/ErrorPage"
import VideoPlayer from "./components/VideoPlayer"
import Lyricsbreakedown from "./Components/lyricsbreakedown"

function ContentRouter () {
  const { id, contentType } = useParams();
  const location = locationPins.find((loc) => loc.id === Number(id));
  
  if (!location) {
    return <ErrorPage />;
  }

  switch (contentType) {
    case "lyrics":
      return <LyricsContainer />
    case "audio": 
      return <WaveformPlayer audioUrl={location.songUrl} />
    case "film-reel":
      return <FilmReel videoUrl={location.videoUrl} />;
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
        <Route path="/lyrics" element={<Lyricsbreakedown/>} />
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
