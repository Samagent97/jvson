import React from "react";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import  "./App.css"
import Body2 from "./components/body2/Body2";




function App() {
  return (
    <div>
      <div className="background">
      <Navbar />
      <Body />
      
      <Body2/>
      
      </div>
     
    </div>
  );
}

export default App;
