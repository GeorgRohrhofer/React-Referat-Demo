import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import TextField from "@mui/material/TextField";

class ShoppingList extends React.Component {
    render() {
      return (
        <div>
            <h1>Einkaufsliste</h1>
            <ul>
                <li>Käse</li>
                <li>Butter</li>
                <li>Speck</li>
            </ul>
            <TextField placeholder='TextField'></TextField><br/>
            <input type="text" placeholder='TextField2' />
        </div>
      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingList/>);