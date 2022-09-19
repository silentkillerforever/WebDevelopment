import React from "react";
// import king from '../components/Ajay.jpg'

function Card({title,imageURL, body}){
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageURL} alt=''/>
            </div>
        </div>
    )
}

export default Card