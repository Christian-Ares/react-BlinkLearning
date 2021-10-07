import React from "react";
import "./style.css";
import List from './List.js'

const colours = ['Amarillo', 'Azul', 'Rojo', 'Verde'];

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      { colours.map(color => <List color={color}/>) }
    </div>
    
  );
}
