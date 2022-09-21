import React from "react";
// import king from '../components/Ajay.jpg'
import './Card.css'
function Card({title,imageURL, body}){
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageURL} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className="btn">
                <button>
                    View more
                </button>
            </div>
            </div>
            
        </div>
    )
}

export default Card