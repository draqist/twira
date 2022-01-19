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
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAIn6VwEAAAAAmyqmpahr101R1i42GPCmwx33zAA%3DKzNTHZpo14SgSRuIQwUjBAomq1varYU0O1b8rDxtccc7ZarCOs");
// myHeaders.append("Cookie", "guest_id=v1%3A164229841681311547; guest_id_ads=v1%3A164229841681311547; guest_id_marketing=v1%3A164229841681311547; personalization_id=\"v1_J6y25CTLm2vfZTLiTiOH/w==\"");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api.twitter.com/2/tweets/search/stream", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


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
