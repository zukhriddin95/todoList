import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './components/layout/index.jsx'
import Todos from './page/todos/todos.jsx'
import Posts from './page/posts/posts.jsx'
import Comments from './page/comments/comments.jsx'
import Users from './page/users/users.jsx'
import Photos from './page/photos/photos.jsx'
import Albums from './page/albums/albums.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
        <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/' element={<Todos />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/users' element={<Users />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/albums' element={<Albums />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
