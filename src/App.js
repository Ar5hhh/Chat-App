import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogInPage from './Components/LogInPage';
import Chat from './Components/Chat';
import Popup from './Components/Popup';
import { useState } from 'react';
function App() {
  let [popup, setpopup] = useState(false)
  let [col, setcol] = useState(false)
  return (
    <div className={col ? "App dark-mode" : "App"}>
      <Routes>
        <Route path='/' element={<LogInPage />} />
        <Route path='/chat' element={<Chat setpopup={setpopup} col={col} setcol={setcol} />} />
      </Routes>
      {popup && <div className='pop'>
        <Popup setpopup={setpopup} col={col} />
      </div>}
    </div>
  );
}

export default App;
