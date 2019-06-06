import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from "./dropdown"

const Search = props => {

    return <table className="titleBar">
        <tbody>
            <tr>
                <td>
                    <div id="wrapper">
                        <div id="container">
                            <img src="./images/tmdb.svg" />
                            <div style={{ width: "10px" }} />
                            <h1>Movies Search</h1>
                        </div>
                    </div>
                </td>
                <td style={{ width: "300px" }} />
                <td>
                    <form onSubmit={props.getMovie}>

                        <input name="movieName" placeholder="Search movie title..." ></input>
                        {/* <input name="movieName" placeholder="Search movie title..." value={this.state.val} onChange={this.InputChange}></input> */}
                        {/* <Dropdown films={}/> */}
                    </form>
                </td>
            </tr>
        </tbody>
    </table>
}


export default Search


