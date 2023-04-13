import React from "react";

import Router from "./Router";
import Clock from "./components/Clock";
import HeightSetter from "./components/Helper/HeightSetter"


import "./styles/main.scss"

function App() {
  return <>
    <Router />
    <HeightSetter />
  </>
}



export default App;