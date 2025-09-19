import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Map from "./Pages/Map"

// ✅ Make sure folder is "Components" (capital C) and file is "WaveformPlayer.jsx"
import WaveformPlayer from "./Components/WaveformPlayer"

import song1 from "./audio/song1.mp3"

// ✅ Same check for ImagePreviewComponent.jsx
import ImagePreviewComponent from "./Components/ImagePreviewComponent"

import locationPins from "../locations"
import LyricsContainer from "./Components/LyricsContainer"

// ❌ Problem: You wrote `FIlmReel` with uppercase "I"
// ✅ Fix: make sure file is named exactly "FilmReel.jsx" and import matches
import FilmReel from "./Components/FilmReel"

// ✅ Make sure filename is exactly "BTSPhotos.jsx"
import BTSPhotos from "./Components/BTSPhotos"

// ✅ Make sure filename is "WrittenReflection.jsx"
import WrittenReflection from "./Components/WrittenReflection"

// ✅ Make sure filename is "VideoPlayer.jsx"
import VideoPlayer from "./Components/VideoPlayer"

// ❌ Problem: You wrote `ErrorPaeg`
// ✅ Fix: should be "ErrorPage.jsx" (and file must be renamed if needed)
import ErrorPage from "./Pages/ErrorPage"

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
        <Route path='/filmreel' element={<FilmReel />} /> {/* ✅ corrected */}
        <Route path='/bts_photos' element={<BTSPhotos />} />
        <Route path='/reflection' element={<WrittenReflection />} />
        <Route path='/watch' element={<VideoPlayer />} />

        {/* Error Page */}
        <Route path='*' element={<ErrorPage />} /> {/* ✅ corrected */}
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
