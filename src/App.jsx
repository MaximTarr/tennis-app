import React from "react";
import Router from "./Router";
import HeightSetter from "./components/Helper/HeightSetter"


import "./styles/main.scss"

function App() {
  return <>
    <Router />
    <HeightSetter />
  </>
}



export default App;