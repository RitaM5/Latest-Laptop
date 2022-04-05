import React from 'react';
import { Button} from 'react-bootstrap';
import image from '../../../public/image/lapii.jpg';
import './Home.css'
const Home = () => {
    return (
        <div className="pt-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <h2>ASUS Zenbook 14X OLED</h2>
                    <h5>A vision of brilliance</h5>
                    <p>Life is brighter and clearer with Zenbook 14X OLED, the slim, light and compact laptop with a gorgeous 16:10 4K OLED HDR NanoEdge touchscreen that gives you the deepest blacks and the most vivid colors. Powered by the latest 11th Gen Intel® Core™ processors and Intel Iris® Xe graphics, Zenbook 14X OLED delivers superb performance with ASUS Intelligent Performance Technology. The precision-engineered 180° ErgoLift hinge makes sharing content easy, and the innovative ASUS NumberPad 2.0 enhances your on-the-go productivity. Let Zenbook 14X OLED light up your work or play, anywhere.</p>
                    <Button variant="danger fs-5">Show more</Button>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img className="img-lapi mt-3" src="image/lapii.jpg"></img>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;