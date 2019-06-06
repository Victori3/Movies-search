import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const MovieRow = props => {
    console.log(props.poster)
    if (props.isMovieSearched) {
        return <div className="movieDescriptionBox">
            <div className="poster" style={{ width: "460px", height: "700px" }} >
                <img style={{ width: "460px", height: "700px" }} src={props.poster} />
            </div>
            <div className="movieInfo">
                {props.getMovie}
                <div className="movie-title">
                    <h1>Title: <span className="colorizing">{props.title}</span></h1>
                </div>
                <div className="movie-overview">
                    <h3>Overview: </h3>
                    <span className="colorizing">{props.overview}</span>
                </div>
                <div className="small-info" >
                    <p><b>Original release: </b> <span className="colorizing">{props.release}</span></p>
                    <p><b>Vote average: </b> <span className="colorizing">{props.vote} / 10 </span></p>
                    <p><b>Movie language: </b> <span className="colorizing">{props.language}</span> </p>
                    <p><b>Popularity:</b> <span className="colorizing">{props.popularity}</span></p>
                    


                </div>
            </div>
        </div>
    }
    else
        return null

}



export default MovieRow


