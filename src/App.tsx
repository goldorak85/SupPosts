import './App.css'
import PostsPage from "./pages/Posts/posts";
import PostByID from "./pages/Posts/_id";
import Register from "./pages/register";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Favorite from "./pages/Posts/favorite";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  (localStorage.getItem("user") === null || localStorage.getItem("user") == "{}") ? <Login /> : <PostsPage />} />
              <Route path="posts">
                  <Route path="" element={<PostsPage />}/>
                  <Route path=":id" element={<PostByID />}/>
              </Route>
              <Route path="register" element={<Register />}/>
              <Route path="login" element={<Login />}/>
              <Route path="logout" element={<Logout />}/>
              <Route path="favorite" element={<Favorite />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
