import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className='App'>
      {/* Wrapping the apps that need to have access to the context --> props children */}
      <ThemeContextProvider>
        {/* Can wrap as many as we need too */}
        <AuthContextProvider>
          <Navbar />
          {/* Wraps only the booklist to have axes to this provider */}
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
