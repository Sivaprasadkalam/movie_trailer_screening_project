import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Tamil from "./pages/Tamil";
import English from "./pages/English";
import Marvel from "./pages/Marvel";
import Home from "./pages/Home";
import CommentPage from "./pages/CommentPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/Tamil" element={<Tamil/>} />
                <Route path="/English" element={<English/>} />
                <Route path="/Marvel" element={<Marvel/>} />
                <Route path="/comment-page/:id" element={<CommentPage/>} />
                
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
