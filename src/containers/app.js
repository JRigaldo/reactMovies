import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';
import VideoList from './video-list';
import axios from 'axios';


const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIE_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=iamges";
const API_KEY = "api_key=fcd1040b241d342718a835bd1f505334";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";

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
            this.setState({movieList:response.data.results.slice(1,9), currentMovie:response.data.results[0]}, function(){
                this.applyVideoToCurrentMovie();
            });
            //console.log(this.state.currentMovie);
        });
    }

    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then((response) => {
            //console.log(response);
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubeKey;
            this.setState({currentMovie: newCurrentMovieState});
            //console.log(newCurrentMovieState)
        });
    }

    onClickListItem(movie){
        this.setState({currentMovie: movie}, function(){
            this.applyVideoToCurrentMovie(); 
            this.setRecommendation();
        })
    }

    setRecommendation(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then((response) => {
            this.setState({movieList:response.data.results.slice(0,5)});
        });
    }

    onClickSearch(searchText){   
        if(searchText){
            axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then((response) => {
                if(response.data && response.data.results[0]){
                    if(response.data.results[0].id != this.state.currentMovie.id){
                        this.setState({currentMovie: response.data.results[0]}, () => {
                            this.applyVideoToCurrentMovie();
                            this.setRecommendation();
                        });
                    }
                }
            });
        }
    }

    render(){
        const RenderMovieList = () => {
            if(this.state.movieList.length>=5){
                return <VideoList movieList={this.state.movieList} callback={this.onClickListItem.bind(this)}/>
            }
        }
        return (
            <div>
                <div className="search_bar">
                    <SearchBar callback={this.onClickSearch.bind(this)}/>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Video videoTitle={this.state.currentMovie.title} videoId={this.state.currentMovie.videoId} description={this.state.currentMovie.overview} />
                        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                    </div>
                    <div className="col-md-4">
                        {RenderMovieList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;