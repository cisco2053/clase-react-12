 
import React from 'react';

function Header() {
  return (
    <header>
      <h1> Google </h1>
    </header>
  );
}

function SearchBar() {
  return (
    <input type="text" placeholder="Search Google" />
  );
}

function SearchButton() {
  return (
    <button> Search </button>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2021 Google</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <SearchButton />
      <Footer />
    </div>
  );
}

export default App;



