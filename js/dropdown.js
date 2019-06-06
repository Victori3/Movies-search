import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown">
                <ul className="submenu">
                    <input type="text" list="movies" />
                    <datalist>
                        <option>Volvo</option>
                        <option>Porche</option>
                        <option>Mercedes</option>
                        <option>Audi</option>
                    </datalist>
                </ul>
            </div >
        )
    }
}

export default Dropdown
