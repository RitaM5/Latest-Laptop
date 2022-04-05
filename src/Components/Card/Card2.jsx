import React from 'react';
import { Card } from 'react-bootstrap';
import './Card2.css';
const Card2 = (props) => {
    const { name, text, picture, ratings } = props.laptop;
    console.log(text);
    return (
        <Card>
          <div className="d-flex gap-2 p-2 mx-2 align-items-center">
              <img src={picture} className="card_img"></img>
              <h4>{name}</h4>
          </div>
         <div className="me-5">
          <p className="mx-3">{text}</p>
          <p className="ms-3 text-left">Rating: {ratings}</p>
         </div>
        </Card>
    );
};

export default Card2;
