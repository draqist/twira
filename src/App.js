import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Profilepage from './Pages/Profile Page/Profilepage'
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Profilepage />}/>
      </Routes>
    </div>
  );
}

export default App;
