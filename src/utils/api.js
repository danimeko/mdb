// import axios from 'axios';



// export default {
// 	fetchMovie :function(movie) {
// 		let key = '37f2280e';
// 		let apiUrl = 'http://www.omdbapi.com/?t=' + movie + '&apikey='+key;
// 		let list ={};

// 		return axios.get(apiUrl)
// 				.then(response => response.data)
// 				.then(movie => {
// 					title : movie.Title
// 					dvd : movie.DVD
// 				})
// 				.catch(function (error) {
// 					console.log(error);
// 				})
// 	}
// }