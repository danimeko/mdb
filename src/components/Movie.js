import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'

class Movie extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	movie : '',
	  	found : false,
	  	movieInfo : {},
	  	error: ''
	  };

	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleChange = this.handleChange.bind(this);
	}

	fetchMovie(movie) {
		 const key = '37f2280e';
		 let apiUrl = 'https://www.omdbapi.com/?t=' + movie + '&apikey='+key;
		
		fetch(apiUrl).then(response => response.json())
						.then(data => { 
							console.log(data);
							this.setState({ movieInfo : data,
										    found : data.Response ,
										    error : data.Error});
					});
	}
	
	handleChange(event){
		let value = event.target.value;
		this.setState(function(){
			return{
				movie : value
			}
		});
	}

	handleSubmit(event){
		event.preventDefault();
		
		let data = this.state.movie;
		this.fetchMovie(data);
	}


	render(){
		return (
			
				<div className="container">
					<div className="row justify-content-center">
							<form onSubmit={this.handleSubmit} className="form">
								<div className="form-group " >
									<div className="input-group input-group-lg">
										<input 
											className = 'form-control test'
											placeholder = 'Enter movie title'
											type = 'text'
											autoComplete = 'off'
											value= {this.state.movie}
											onChange = {this.handleChange}
										/>
										{/* <div className="input-group-append">
											<span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
										</div> */}
									</div>
								</div>
							</form>
					</div>

					{ this.state.movieInfo.Title &&
						<div className='search'>
							<div className="row justify-content-center">
    							<div className="col-lg-4 col-md-4 col-sm-12">
									<img src={this.state.movieInfo.Poster} alt ={this.state.movieInfo.Title} className="img-fluid rounded mx-auto d-block"/>
								</div>
								<div className="col-lg-8 col-md-8 col-sm-12">
									<ul className="list-group list-group-flush">
										<li className="list-group-item" ><h1>Title : <span className="info">{this.state.movieInfo.Title}</span></h1></li>
										
										<li className="list-group-item"><h1><b>Actors : </b> {this.state.movieInfo.Actors}</h1></li>
										
										<li className="list-group-item"><h1><b>Director : </b> {this.state.movieInfo.Director}</h1></li>
										
										<li className="list-group-item"><h1><b>Plot : </b> {this.state.movieInfo.Plot}</h1></li>
										
										<li className="list-group-item"><h1><b>Genre : </b> {this.state.movieInfo.Genre}</h1></li>
										
										<li className="list-group-item"><h1><b>Awards : </b> {this.state.movieInfo.Awards}</h1></li>
									</ul> 
								</div> 
							</div>
						</div>
					}

					{ this.state.error && 
						<div class="alert alert-warning ">
							<strong>{this.state.error}</strong> 
						</div>}
				</div> 
				
			);
	}
}

export default Movie;