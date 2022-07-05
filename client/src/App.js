import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import useLocalStorage from './hooks/useLocalStorage';


const App = () => {

  const [id, setId] = useLocalStorage()

  return (
    <>
    {id}
    <Login onIdSubmit={setId} />
    </>
  );
}

export default App;