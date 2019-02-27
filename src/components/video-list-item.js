import React from 'react';

const VideoListItem = ({movie}) => {
    return <li>Un film recommendé : {movie} </li>
}

/*
const VideoListItem = (props) => {
    //let movie = propse.movie EST LE RACCOURCI QUI PERMET DE METTRE JUST movie à la place des propse
    return <li>Un film recommendé : {props.movie}</li>
}
*/

export default VideoListItem;