import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card3 from '../Card-3/Card3';

const Card3 = () => {
    return (
        <div>
            <CardGroup className="gap-3 mt-5">
                {
                    reviewLaptop.slice(0, 3).map(laptop => <Card3 laptop={laptop} key={laptop.id}></Card3>)
                }
            </CardGroup>
        </div>
    );
};

export default Card3;