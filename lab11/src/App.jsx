import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/Home"; import Create from "./pages/Create"; import Post from "./pages/Post"; import Archive from "./pages/Archive";
import "./App.css";
export default function App(){return <BrowserRouter><nav className="navbar"><div className="nav-container"><Link to="/" className="logo">My Blog</Link><div className="nav-links"><Link to="/">Home</Link><Link to="/create">Create Post</Link><Link to="/archive">Archive</Link></div></div></nav><main className="main-content"><Routes><Route path="/" element={<Home/>}/><Route path="/create" element={<Create/>}/><Route path="/post/:id" element={<Post/>}/><Route path="/archive" element={<Archive/>}/></Routes></main></BrowserRouter>}
