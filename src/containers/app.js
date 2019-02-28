import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import VideoList from './video-list';
import axios from 'axios';


const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIE_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=iamges";
const API_KEY = "api_key=fcd1040b241d342718a835bd1f505334";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {movieList:{}, currentMovie:{}};
    }

    componentWillMount(){
        this.initMovies();
    }

    initMovies(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then((response) => {
            this.setState({movieList:response.data.results.slice(1, 9), currentMovie:response.data.results[0]});
            console.log('------');
            console.log(this.state.currentMovie);
            console.log('------');
            
        });
    }

    render(){
        const RenderMovieList = () => {
            if(this.state.movieList.length>=5){
                return <VideoList movieList={this.state.movieList}/>
            }
        }
        return (
            <div>
                <SearchBar/>
                {RenderMovieList()}
                <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
            </div>
        )
    }
}

export default App;