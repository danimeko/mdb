import React from 'react';

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
				<div className="wrapper">
					<div className="search">
						<form onSubmit={this.handleSubmit}>
							
							<input 
								className = 'searchTitle'
								placeholder = 'Enter movie title'
								type = 'text'
								autoComplete = 'off'
								value= {this.state.movie}
								onChange = {this.handleChange}
							/>
							<button
								className = 'button'
								type = 'submit'
								disabled = {!this.state.movie}>
								<i className="fa fa-search"></i>
							</button>
						</form>
					</div>

					{ this.state.movieInfo.Title &&
						<div className="displayInfo">
							<div className="posterImg">
								<img src={this.state.movieInfo.Poster} alt ={this.state.movieInfo.Title}/>
							</div>
							<div className="movieInfo">
								<ul>
									<li><h1><b>Title : </b> <span className="info">{this.state.movieInfo.Title}</span></h1></li>
									
									<li><h1><b>Actors : </b> {this.state.movieInfo.Actors}</h1></li>
									
									<li><h1><b>Director : </b> {this.state.movieInfo.Director}</h1></li>
									
									<li><h1><b>Plot : </b> {this.state.movieInfo.Plot}</h1></li>
									
									<li><h1><b>Genre : </b> {this.state.movieInfo.Genre}</h1></li>
									
									<li><h1><b>Awards : </b> {this.state.movieInfo.Awards}</h1></li>
								</ul> 
							</div> 
						</div> 
					}

					{ this.state.found &&
						<div className="notFound">{this.state.error}</div>}
				</div> 
				
			);
	}
}

export default Movie;