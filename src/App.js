import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './component/navbar/navbar';
import About from './pages/about/About';
import Blogs from './pages/blog/Blogs';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />} >
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
