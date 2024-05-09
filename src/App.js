import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/navbar';
import About from './pages/about/About';
import Blogs from './pages/blog/Blogs';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (<div className='app'>

    <ToastContainer
      position="top-right" autoClose={1000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover theme="dark"> </ToastContainer>

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
  </div >
  );
}

export default App;
