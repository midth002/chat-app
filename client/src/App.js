import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './components/Dashboard/Dashboard'
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationProvider, ConversationsProvider } from './contexts/ConversationsProvider';

const App = () => {

  const [id, setId] = useLocalStorage()

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (

    id ? dashboard : <Login onIdSubmit={setId} />

  );
}

export default App;