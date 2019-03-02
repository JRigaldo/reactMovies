import React from 'react';

const IMG_BASE_URL="https://image.tmdb.org/t/p/w500/";

const VideoListItem = (props) => {
    const {movie} = props;
    return  <li className="list-group-item" onClick={handelOnClick}>
                <div className="media">
                    <div className="media-left">
                        <img className="media-object  img-rounded" height="100px" src={`${IMG_BASE_URL}${movie.poster_path}`} />
                    </div>
                    <div className="media-body">
                        <h3 className="title_list_item">{movie.title}</h3>
                    </div>
                </div>
            </li>

            function handelOnClick(){
                 props.callback(movie);
                 //console.log('movie', movie)
            }
}

/*
const VideoListItem = (props) => {
    //let movie = propse.movie EST LE RACCOURCI QUI PERMET DE METTRE JUST movie à la place des propse
    return <li>Un film recommendé : {props.movie}</li>
}
*/

export default VideoListItem;