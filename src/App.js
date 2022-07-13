import React from 'react'
import HomePage from './Components/Home Page/HomePage';
import MoviesToWatch from './Components/ListMOives/MoviesToWatch';
import RecommendedBar from './Components/RecommendedBar/RecommendedBar';


function App() {
  return (
    <>
      <div className="mainContainer">
        <HomePage />
        <MoviesToWatch />
        <RecommendedBar />
      </div>
    </>
  );
}

export default App;
