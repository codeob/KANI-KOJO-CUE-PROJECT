import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Map from "./Pages/Map"
import WaveformPlayer from "./components/WaveformPlayer"
import song1 from "./audio/song1.mp3"
import "./App.css"

function App() {
  //Routing  for All pages
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route index element={<HomePage/>} />
       <Route path='/map' element={<Map/>} />





       {/* creating and testing individual components down here */}
       <Route path='/waveform' element={<WaveformPlayer audioUrl={song1}/>}/>
        {/* <Route path='/waveform2' element={<AudioWaveformProgress audioUrl={song1} />}/>        */}
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