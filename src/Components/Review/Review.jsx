import React from 'react';
import useLaptop from '../../hooks/useLaptop';
import { CardGroup } from 'react-bootstrap';
import Card3 from '../Card-3/Card3';
const Review = () => {
    const [reviewLaptop, setReviewLaptop] = useLaptop();
    return (
        <div>
            <CardGroup className="gap-3 mt-5">
                {
                    reviewLaptop.map(laptop => <Card3 laptop={laptop} key={laptop.id}></Card3>)
                }
            </CardGroup>
        </div>
    );
};

export default Review;