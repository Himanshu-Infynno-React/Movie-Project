import React from 'react'
import HomePage from './Components/Home Page/HomePage';
import NavBar from './Components/NavBar/NavBar';
import MoviesToWatch from './Components/ListMOives/MoviesToWatch';
import RecommendedBar from './Components/RecommendedBar/RecommendedBar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <div className="mainContainer">
      <NavBar />
      <HomePage />
      <MoviesToWatch />
      <RecommendedBar />
      <Footer />
      </div>
    </>
  );
}

export default App;
