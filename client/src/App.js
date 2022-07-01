import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Join /> }/>
        <Route path="/chat" element={<Chat />} />
        </Routes>
    </Router>
  );
}

export default App;