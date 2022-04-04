import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faHeart as sHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as rHeart} from "@fortawesome/free-regular-svg-icons";  

const Like = props => { 
        if(props.liked)
            return (<FontAwesomeIcon onClick={props.onClick} icon={sHeart}/>);

        return (<FontAwesomeIcon onClick={props.onClick} icon={rHeart}/>);
}
 
export default Like;