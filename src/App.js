import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import CompletedTasks from './CompletedTasks';
import Error from './Error';
import MyTasks from './MyTasks';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="main-body container-fluid my-3">
        <div className="_container">
          <Routes>
            <Route exact path="/" element={<MyTasks />} />
            <Route exact path="/mytasks" element={<MyTasks />} />
            <Route exact path="/completed" element={<CompletedTasks />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
