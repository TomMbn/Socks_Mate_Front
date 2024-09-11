import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Register from './pages/Register';
import Message from './pages/Message';
import Like from './pages/Like';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/feed' element={<Feed />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/message' element={<Message />}/>
        <Route path='/like' element={<Like />}/>
      </Routes>
    </Router>
  )
}

export default App
