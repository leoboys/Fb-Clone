import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
//import Widgets from "./Widgets";
import Feed from "./Feeds";
import { Card, CardContent } from "@mui/material";
import { Widgets } from "@mui/icons-material";

function App() {
  return (
    <div>
      <div style={{position: "fixed", left: 0, top: 0}}>
<Card style={{position: "fixed", left: 0, top: "60px", width: 400, height: "100%" }}>
<CardContent>
<SideBar  />
</CardContent>
</Card>
        
      </div>
      <div style={{position: "fixed", right: 0, top: 0}}>
<Card style={{position: "fixed", right: 0, top: "60px", width: 400, height: "100%" }}>
<CardContent>
<Widgets  />
</CardContent>
</Card>
        
      </div>
      
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
