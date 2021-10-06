import React from "react";
import Header from "./Header";
//import SideBar from "./SideBar";
//import Widgets from "./Widgets";
import Feed from "./Feeds";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
}

export default App;
