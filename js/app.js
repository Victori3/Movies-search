import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from "./search.js";
import MovieRow from "./movieRow.js";
import Footer from "./footer.js";


import "../scss/style.scss";

const API_KEY = 'e7184bc66c4471d00d84edc4e4f7b954'
const popularMovie_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e7184bc66c4471d00d84edc4e4f7b954'

class Main extends Component {
    state = {
        movies: {},
        isMovieSearched: false,
        firstMovie: false
    }

    componentWillMount() {
        var that = this;
        fetch(popularMovie_API)
            .then(res => res.json())
            .then(function (data) {
                let single = data.results[0];
                console.log(data);
                that.setState(
                    {
                        isMovieSearched: true,
                        movieID: single.id,
                        original_title: single.original_title,
                        overview: single.overview,
                        homepage: single.homepage,
                        poster: single.poster_path.replace("/", "https://image.tmdb.org/t/p/original/"),
                        production: single.production_companies,
                        production_countries: single.production_countries,
                        release: single.release_date,
                        vote: single.vote_average,
                        runtime: single.runtime,
                        popularity: single.popularity,
                        language: single.original_language,
                        backdrop_path: single.backdrop_path.replace("/", "https://image.tmdb.org/t/p/original/")
                    }, function () {
                        let test = `{this.state.backdrop_path}`;
                        console.log(test, "test");
                        document.body.style.backgroundImage = `url(${this.state.backdrop_path})`;
                        document.body.style.backgroundSize = 'cover';
                        document.body.style.backgroundRepeat = 'no-repeat';
                    });
            }).catch(error => console.error('error', error));
        console.log(popularMovie_API);
    }

    //function to provide submit work
    getMovie = (e) => {
        //saving the value of input 
        let movieName = e.target.movieName.value;
        console.log(movieName);
        e.preventDefault();
        console.log(movieName);
        let that = this;
        const api_url = fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(function (data) {
                let single = data.results[0];
                console.log(data);
                that.setState(
                    {
                        isMovieSearched: true,
                        original_title: single.original_title,
                        poster: single.poster_path.replace("/", "https://image.tmdb.org/t/p/original/"),
                        backdrop_path: single.backdrop_path.replace("/", "https://image.tmdb.org/t/p/original/"),
                        overview: single.overview,
                        release: single.release_date,
                        vote: single.vote_average,
                        runtime: single.runtime,
                        popularity: single.popularity,
                        movieID: single.id,
                        homepage: single.homepage,
                        production: single.production_companies,
                        language: single.original_language,
                        production_countries: single.production_countries,
                    }, function () {
                        let test = `{this.state.backdrop_path}`;
                        console.log(test, "test");
                        document.body.style.backgroundImage = `url(${this.state.backdrop_path})`;
                        document.body.style.backgroundSize = 'cover';
                        document.body.style.backgroundRepeat = 'no-repeat';
                    });
            }).catch(error => console.error('error', error));
        console.log(api_url);
    }

    render() {
        // let { film } = this.state;
        return (

            <div className="container" >
                <div className="containerInner" >
                    {/* getmovie - the name of the props*/}
                    <Search getMovie={this.getMovie} />
                    <MovieRow title={this.state.original_title} overview={this.state.overview} poster={this.state.poster} popularity={this.state.popularity} backdrop_img={this.state.backdrop_path} release={this.state.release} vote={this.state.vote} production_countries={this.state.production_countries} language={this.state.language} isMovieSearched={this.state.isMovieSearched} />
                    <Footer />
                </div>
            </div>
        )
    }
}


class App extends Component {
    render() {
        return <Main />;
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
