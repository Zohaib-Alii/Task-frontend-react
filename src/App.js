import "./App.css";
import Table from "./components/table";
import PostDetailApi from "./components/postDetailApi";
import PostCommentApi from "./components/postCommentApi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/postdetailapi' element={<PostDetailApi />} />
          <Route path='/postcommentapi' element={<PostCommentApi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
