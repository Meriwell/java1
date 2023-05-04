import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/search";
import { Preloader } from "../components/preloader";


class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=bea2b905&s=Venom`)
            .then((response) => response.json(), console.log(this.json))
            .then((data) => this.setState({ movies: data.Search, loading: false}, console.log(data)))
            .catch((err) => {
                console.log(err)
            })
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=20d64e58&s=${str}`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}))
    }


    render(){
        const { movies, loading } = this.state;

        console.log(this.state.movies)
        console.log(this.componentDidMount.movies)

        return (
        <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
        </main>
        );
    }
}
export {Main};