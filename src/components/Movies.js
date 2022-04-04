import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import {getMovies} from '../services/fakeMovieService';
import Like from './Like';

class Movies extends Component {
    state = { movies: getMovies() };
    
    handleDelete = movie => {
        const movies = this.state.movies.filter(m=>m._id !== movie._id);
        this.setState({movies});
    };

    handleLike = movie => {
        console.log("Clicked");
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};

        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    render() { 
        const {length: count} = this.state.movies;

        if(count === 0)
            return <p>There are no movies in the database</p>;
        return (
            <React.Fragment>
                <p>Showing {count} movies in the database.</p>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie, key) => (
                            <tr key={key}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like onClick={() => this.handleLike(movie)} liked={movie.liked}/></td>
                                <td><Button onClick={() => this.handleDelete(movie)} className="btn-danger">Delete</Button></td>
                            </tr>
                            ))}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}
 
export default Movies;