import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
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
        axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then((response) => {
            this.setState({movieList:response.data.results.slice(1, 9)});
            this.setState({currentMovie:response.data.results[0]});
            console.log('------');
            console.log(this.state.currentMovie);
            console.log('------');
            
        });
    }

    render(){
        return (
            <div>
                <SearchBar/>
                <VideoList/>
            </div>
        )
    }
}

export default App;