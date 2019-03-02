import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
    //console.log(movieList)
    const {movieList} = props

    return (
        <div>
            <ul className="list-groupe">
                {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack} />
                    })
                }
                
            </ul>
        </div>
    );

    function receiveCallBack(movie){
        props.callback(movie)
        //console.log('parent', movie)
    }
}

export default VideoList;