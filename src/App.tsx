import './App.css'
import PostsPage from "./pages/Posts/posts";
import PostByID from "./pages/Posts/_id";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PostsPage />}/>
              <Route path="posts">
                  <Route path="" element={<PostsPage />}/>
                  <Route path=":id" element={<PostByID />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
