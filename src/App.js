import { Route, Routes } from 'react-router-dom';
import './App.scss';
// import Sidebar from './Components/Sidebar/Sidebar';
import Homepage from './Pages/Homepage/Homepage';
// import Profilepage from './Pages/Profile Page/Profilepage'
function App() {
  return (
    <div className="App">
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
