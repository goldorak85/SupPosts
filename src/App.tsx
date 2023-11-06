import './App.css'
import Posts from "./pages/Posts/Posts";
import PostByID from "./pages/Posts/_id";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Posts />}/>
              <Route path="posts">
                  <Route path="" element={<Posts />}/>
                  <Route path=":id" element={<PostByID />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
