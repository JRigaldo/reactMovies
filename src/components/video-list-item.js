import React from 'react';

const IMG_BASE_URL="https://image.tmdb.org/t/p/w500/";

const VideoListItem = ({movie}) => {
    return  <li>
                <img height="100px" src={`${IMG_BASE_URL}${movie.poster_path}`} />
                <h3>{movie.title} </h3>
            </li>
}

/*
const VideoListItem = (props) => {
    //let movie = propse.movie EST LE RACCOURCI QUI PERMET DE METTRE JUST movie à la place des propse
    return <li>Un film recommendé : {props.movie}</li>
}
*/

export default VideoListItem;