import React,{useState} from "react";
import "./App.css";
import Flex from "./flex";
import Button from "./button";
import { AppContext } from "./context";

function App() {
  
  const [flexDirection,setFlexDirection] = useState("")

  const [justifyContent,setJustifyContent] = useState("")

  const [alignItems,setAlignItems] = useState("");

  console.log(flexDirection ,justifyContent,alignItems);
  
  return (
    <AppContext.Provider value={{flexDirection ,justifyContent,alignItems,setFlexDirection,setJustifyContent,setAlignItems}} >
      <div className="App-main">
      <h1 className="title">
        Flex Box
      </h1>
      <div className="App">
        <div className="Flex">
          <Flex />
        </div>
        <div className="Button">
          <Button />
        </div>
      </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
