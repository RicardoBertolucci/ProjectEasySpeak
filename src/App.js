//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Config
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header/Header';

//pages
import Home from './pages/Home';
import EasySpeak from './pages/EasySpeak';
import Blog from './pages/Blog';
import Query from './pages/Query';
import Password from './pages/Password';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EasySpeak" element={<EasySpeak />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Query" element={<Query />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
