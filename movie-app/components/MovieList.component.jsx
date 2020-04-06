import React from 'react'

class MovieList extends React.Component {

    renderMovies() {
        const { movies } = this.props

        return (
            movies.map(movie => {
                return (
                    <div className='col-lg-4 mb-5'>
                        <div className="card h-100">
                        <a href="#"><img className="card-img-top" src={movie.image} alt="" height='200px'  /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="#">{ movie.name }</a>
                            </h4>
                            <h5>{movie.releaseYear}</h5>
                            <p className="card-text">{movie.description}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{ movie.rating }</small>
                        </div>
                        </div>
                    </div>
                )
            })
        )
    }
    
    render() {
        return (
            <div className='d-flex flex-wrap'>
                {this.renderMovies()}
            </div>
        )
    }
    
}

export default MovieList