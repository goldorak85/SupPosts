import './App.css'
import PostsPage from "./pages/Posts/posts";
import PostByID from "./pages/Posts/_id";
import Register from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function logout(): boolean {
    localStorage.clear();
    return true;
}

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  (localStorage.getItem("user") === null) ? <Login /> : <PostsPage />} />
              <Route path="posts">
                  <Route path="" element={<PostsPage />}/>
                  <Route path=":id" element={<PostByID />}/>
              </Route>
              <Route path="register" element={<Register />}/>
              <Route path="login" element={<Login />}/>
              <Route path="logout" element={(logout()) ? <Login /> : <Login />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
