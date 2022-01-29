import { Route, Routes, } from 'react-router-dom';
import './App.scss';
import BottomNav from './Components/BottomNav/BottomNav';
import Sidebar from './Components/Sidebar/Sidebar';
import Bookmark from './Pages/Bookmark/Bookmark';
import Explore from './Pages/Explore/Explore';
import Homepage from './Pages/Homepage/Homepage';
import List from './Pages/List/List';
import Notification from './Pages/Notification/Notification';
import SignUp from './Pages/SignUp/SignUp';
import Profilepage from './Pages/Profile Page/Profilepage';

function App() {
  return (
    <div className="App">
      <div className = 'appSide'>
        <Sidebar/>
      </div>
      <div className = 'appRoutes'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/notifications' element={<Notification />}/>
          <Route path='/bookmarks' element={<Bookmark />}/>
          <Route path='/lists' element={<List />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/profile' element={<Profilepage />}/>
        </Routes>
      </div>
      <div className='appBottom'>
        <BottomNav/>
      </div>
    </div>
  );
}

export default App;
