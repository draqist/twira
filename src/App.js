import { Route, Routes, } from 'react-router-dom';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Bookmark from './Pages/Bookmark/Bookmark';
import Explore from './Pages/Explore/Explore';
import Homepage from './Pages/Homepage/Homepage';
import List from './Pages/List/List';
import Notification from './Pages/Notification/Notification';
import {TwitterData} from './data';

function App() {
  TwitterData()
  return (

    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/notifications' element={<Notification />}/>
        <Route path='/bookmarks' element={<Bookmark />}/>
        <Route path='/lists' element={<List />}/>
      </Routes>
      
    </div>
  );
}

export default App;
